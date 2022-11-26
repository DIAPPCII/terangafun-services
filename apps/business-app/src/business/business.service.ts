import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { Business } from './entities/business.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  FilterOperator,
  paginate,
  Paginated,
  PaginateQuery,
} from 'nestjs-paginate';

@Injectable()
export class BusinessService {
  constructor(
    @InjectRepository(Business)
    private readonly businessRepository: Repository<Business>,
  ) {}

  async create(createBusinessDto: CreateBusinessDto) {
    const business = new Business();
    business.name = createBusinessDto.name;
    business.description = createBusinessDto.description;
    business.isVerified = false;
    business.admins = [createBusinessDto.admin!];
    business.types = createBusinessDto.types;
    business.createAt = new Date();
    business.lastUpdate = business.createAt;
    return await this.businessRepository.save(business).catch((error) => {
      switch (error.code) {
        case 'ER_DUP_ENTRY':
          throw new ConflictException(error.message);
          break;
      }
    });
  }

  async findAll(query: PaginateQuery): Promise<Paginated<Business>> {
    return await paginate(query, this.businessRepository, {
      relations: ['types', 'admins'],
      sortableColumns: [
        'id',
        'name',
        'createAt',
        'lastUpdate',
        'isPublic',
        'isVerified',
      ],
      //nullSort: 'first',
      searchableColumns: ['name', 'description'],
      defaultSortBy: [['createAt', 'DESC']],
      filterableColumns: {
        'admins.id': [FilterOperator.IN],
        'types.id': [FilterOperator.IN],
        'types.name': [FilterOperator.ILIKE],
        isVerified: [FilterOperator.EQ],
        isPublic: [FilterOperator.EQ],
        createAt: [FilterOperator.GTE, FilterOperator.LTE],
        lastUpdate: [FilterOperator.GTE, FilterOperator.LTE],
      },
    }).catch((error) => {
      switch (error.code) {
        case 'ER_WRONG_VALUE':
          throw new BadRequestException(error.message);
          break;
        case 'ER_BAD_FIELD_ERROR':
          throw new BadRequestException(error.message);
          break;
      }
      throw new InternalServerErrorException(error.message);
    });
  }

  findOne(id: string) {
    return this.businessRepository.find({
      where: { id: id },
      relations: ['admins', 'types'],
    });
  }

  update(id: string, updateBusinessDto: UpdateBusinessDto) {
    return `This action updates a #${id} business`;
  }

  remove(id: string) {
    return `This action removes a #${id} business`;
  }
}
