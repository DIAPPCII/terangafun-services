import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from "@nestjs/common";
import { CreateDestinationTypeDto } from "./dto/create-destination-type.dto";
import { UpdateDestinationTypeDto } from "./dto/update-destination-type.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { DestinationType } from "../destination-type/entities/destination-type.entity";
import { Repository } from "typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";

@Injectable()
export class DestinationTypeService {
  constructor(@InjectRepository(DestinationType) private destinationTypeRepository: Repository<DestinationType>) {}

  async create(createDestinationTypeDto: CreateDestinationTypeDto) {
    const destinationType = new DestinationType();
    destinationType.name = createDestinationTypeDto.name;
    destinationType.description = createDestinationTypeDto.description;
    destinationType.createdAt = new Date();
    destinationType.lastUpdate = destinationType.createdAt;
    return await this.destinationTypeRepository.save(destinationType).catch(error => {
      switch (error.code) {
        case "ER_DUP_ENTRY":
          throw new ConflictException(error.message);
          break;
      }
    });
  }

  async findAll(query: PaginateQuery): Promise<Paginated<DestinationType>> {
    return await paginate(query, this.destinationTypeRepository, {
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
    return this.destinationTypeRepository.findOneBy({ id });
  }

  async update(id: string, updateDestinationTypeDto: UpdateDestinationTypeDto) {
    return await this.destinationTypeRepository.update(id, updateDestinationTypeDto).catch(error => {
      switch (error.code) {
        case "ER_DUP_ENTRY":
          throw new ConflictException(error.message);
          break;
      }
    });
  }

  async remove(id: string) {
    return await this.destinationTypeRepository.delete(id);
  }
}
