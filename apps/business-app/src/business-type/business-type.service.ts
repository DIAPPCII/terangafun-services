import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FilterOperator,
  paginate,
  Paginated,
  PaginateQuery,
} from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { CreateBusinessTypeDto } from './dto/create-business-type.dto';
import { UpdateBusinessTypeDto } from './dto/update-business-type.dto';
import { BusinessType } from './entities/business-type.entity';

@Injectable()
export class BusinessTypeService {
  constructor(
    @InjectRepository(BusinessType)
    private businessTypeRepository: Repository<BusinessType>,
  ) {}

  async create(createBusinessTypeDto: CreateBusinessTypeDto) {
    const businessType = new BusinessType();
    businessType.name = createBusinessTypeDto.name;
    businessType.description = createBusinessTypeDto.description;
    businessType.createAt = new Date();
    businessType.lastUpdate = businessType.createAt;
    return await this.businessTypeRepository
      .save(businessType)
      .catch((error) => {
        switch (error.code) {
          case 'ER_DUP_ENTRY':
            throw new ConflictException(error.message);
            break;
        }
      });
  }

  async findAll(query: PaginateQuery): Promise<Paginated<BusinessType>> {
    return await paginate(query, this.businessTypeRepository, {
      sortableColumns: ['id', 'name', 'createAt', 'lastUpdate'],
      //nullSort: 'first',
      searchableColumns: ['name', 'description'],
      defaultSortBy: [['createAt', 'DESC']],
      filterableColumns: {
        createAt: [FilterOperator.GTE, FilterOperator.LTE],
        lastUpdate: [FilterOperator.GTE, FilterOperator.LTE],
      },
    }).catch((error) => {
      switch (error.code) {
        case 'ER_WRONG_VALUE':
          throw new BadRequestException(error.message);
          break;
      }
      throw new InternalServerErrorException(error.message);
    });
  }

  findOne(id: string): Promise<BusinessType> {
    return this.businessTypeRepository.findOneBy({ id });
  }

  async update(id: string, updateBusinessTypeDto: UpdateBusinessTypeDto) {
    return await this.businessTypeRepository
      .update(id, updateBusinessTypeDto)
      .catch((error) => {
        switch (error.code) {
          case 'ER_DUP_ENTRY':
            throw new ConflictException(error.message);
            break;
        }
      });
  }

  async remove(id: string) {
    return await this.businessTypeRepository.delete(id);
  }
}
