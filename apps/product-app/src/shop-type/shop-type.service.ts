import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { CreateShopTypeDto } from "./dto/create-shop-type.dto";
import { UpdateShopTypeDto } from "./dto/update-shop-type.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { ShopType } from "./entities/shop-type.entity";
import { Repository } from "typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";

@Injectable()
export class ShopTypeService {
  constructor(@InjectRepository(ShopType) private shopTypeRepository: Repository<ShopType>) {}

  async create(createShopTypeDto: CreateShopTypeDto) {
    const shopType = new ShopType();
    shopType.name = createShopTypeDto.name;
    shopType.description = createShopTypeDto.description;
    shopType.createdAt = new Date();
    shopType.lastUpdate = shopType.createdAt;
    return await this.shopTypeRepository.save(shopType).catch(error => {
      switch (error.code) {
        case "ER_DUP_ENTRY":
          throw new ConflictException(error.message);
          break;
      }
    });
  }

  async findAll(query: PaginateQuery): Promise<Paginated<ShopType>> {
    return await paginate(query, this.shopTypeRepository, {
      sortableColumns: ["id", "name", "createdAt", "lastUpdate"],
      //nullSort: 'first',
      searchableColumns: ["name", "description"],
      defaultSortBy: [["createdAt", "DESC"]],
      filterableColumns: {
        createdAt: [FilterOperator.GTE, FilterOperator.LTE],
        lastUpdate: [FilterOperator.GTE, FilterOperator.LTE],
      },
    }).catch(error => {
      switch (error.code) {
        case "ER_WRONG_VALUE":
          throw new BadRequestException(error.message);
          break;
      }
      throw new InternalServerErrorException(error.message);
    });
  }

  findOne(id: string) {
    return this.shopTypeRepository.findOneBy({ id });
  }

  async update(id: string, updateShopTypeDto: UpdateShopTypeDto) {
    return await this.shopTypeRepository.update(id, updateShopTypeDto).catch(error => {
      switch (error.code) {
        case "ER_DUP_ENTRY":
          throw new ConflictException(error.message);
          break;
      }
    });
  }

  async remove(id: string) {
    return await this.shopTypeRepository.delete(id);
  }
}
