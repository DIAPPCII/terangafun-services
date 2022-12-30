import { ConflictException, Injectable } from "@nestjs/common";
import { CreateLocationTypeDto } from "./dto/create-location-type.dto";
import { UpdateLocationTypeDto } from "./dto/update-location-type.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";
import { UpdateSiteTypeDto } from "../site-type/dto/update-site-type.dto";
import { LocationType } from "./entities/location-type.entity";

@Injectable()
export class LocationTypeService {
  constructor(
    @InjectRepository(LocationType)
    private locationTypeRepository: Repository<LocationType>,
  ) {}
  async create(createLocationTypeDto: CreateLocationTypeDto) {
    const locationType = new LocationType();
    locationType.name = createLocationTypeDto.name;
    locationType.description = createLocationTypeDto.description;
    locationType.createAt = new Date();
    locationType.lastUpdate = locationType.createAt;
    return await this.locationTypeRepository.save(locationType).catch(error => {
      switch (error.code) {
        case "ER_DUP_ENTRY":
          throw new ConflictException(error.message);
          break;
      }
    });
  }

  async findAll(query: PaginateQuery): Promise<Paginated<LocationType>> {
    return await paginate(query, this.locationTypeRepository, {
      sortableColumns: ["id", "name", "createAt", "lastUpdate"],
      //nullSort: 'first',
      searchableColumns: ["name", "description"],
      defaultSortBy: [["createAt", "DESC"]],
      filterableColumns: {
        createAt: [FilterOperator.GTE, FilterOperator.LTE],
        lastUpdate: [FilterOperator.GTE, FilterOperator.LTE],
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} siteType`;
  }

  update(id: number, updateSiteTypeDto: UpdateSiteTypeDto) {
    return `This action updates a #${id} siteType`;
  }

  remove(id: number) {
    return `This action removes a #${id} siteType`;
  }
}
