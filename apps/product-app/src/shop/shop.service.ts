import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { CreateShopDto } from "./dto/create-shop.dto";
import { UpdateShopDto } from "./dto/update-shop.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Shop } from "./entities/shop.entity";
import { Repository } from "typeorm";
import { paginate, Paginated, PaginateQuery } from "nestjs-paginate";

@Injectable()
export class ShopService {
  constructor(@InjectRepository(Shop) private shopRepository: Repository<Shop>) {}

  async create(createShopDto: CreateShopDto) {
    const shop = new Shop();
    shop.name = createShopDto.name;
    shop.description = createShopDto.description;
    shop.types = createShopDto.types;
    shop.email = createShopDto.email;
    shop.phoneNumber = createShopDto.phoneNumber;
    shop.createdAt = new Date();
    shop.lastUpdate = shop.createdAt;
    return await this.shopRepository.save(shop).catch(error => {
      switch (error.code) {
        case "ER_DUP_ENTRY":
          throw new ConflictException(error.message);
          break;
      }
    });
  }

  async findAll(query: PaginateQuery): Promise<Paginated<Shop>> {
    return await paginate(query, this.shopRepository, {
      relations: ["types"],
      sortableColumns: ["id", "name", "createdAt", "lastUpdate"],
    }).catch(error => {
      switch (error.code) {
        case "ER_WRONG_VALUE":
          throw new BadRequestException(error.message);
          break;
      }
      throw new InternalServerErrorException(error.message);
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} shop`;
  }

  update(id: number, updateShopDto: UpdateShopDto) {
    return `This action updates a #${id} shop`;
  }

  remove(id: number) {
    return `This action removes a #${id} shop`;
  }
}
