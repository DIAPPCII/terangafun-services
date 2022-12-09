import { ConflictException, Injectable } from "@nestjs/common";
import { CreateSiteTypeDto } from './dto/create-site-type.dto';
import { UpdateSiteTypeDto } from './dto/update-site-type.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { SiteType } from "./entities/site-type.entity";
import { Repository } from "typeorm";
import { FilterOperator, paginate, Paginated, PaginateQuery } from "nestjs-paginate";

@Injectable()
export class SiteTypeService {

  constructor(
    @InjectRepository(SiteType)
    private siteTyperepository: Repository<SiteType>
  ) {}
  async create(createSiteTypeDto: CreateSiteTypeDto) {
    const siteType = new SiteType();
    siteType.name = createSiteTypeDto.name;
    siteType.description = createSiteTypeDto.description;
    siteType.createAt = new Date();
    siteType.lastUpdate = siteType.createAt;
    return await this.siteTyperepository.save(siteType).catch((error) => {
      switch (error.code) {
        case 'ER_DUP_ENTRY':
          throw new ConflictException(error.message);
          break;
      }
    });
  }

  async findAll(query: PaginateQuery) : Promise<Paginated<SiteType>>{
    return await paginate(query, this.siteTyperepository, {
      sortableColumns: [
        'id',
        'name',
        'createAt',
        'lastUpdate',
      ],
      //nullSort: 'first',
      searchableColumns: ['name', 'description'],
      defaultSortBy: [['createAt', 'DESC']],
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
