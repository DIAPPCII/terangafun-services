import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterOperator, paginate, Paginated, PaginateQuery } from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { CreateActivityTypeDto } from './dto/create-activity-type.dto';
import { UpdateActivityTypeDto } from './dto/update-activity-type.dto';
import { ActivityType } from './entities/activity-type.entity';

@Injectable()
export class ActivityTypeService {
  constructor(
    @InjectRepository(ActivityType)
    private activityTypeRepository: Repository<ActivityType>,
  ) {}

  async create(createActivityTypeDto: CreateActivityTypeDto) {
    const activityType = new ActivityType();
    activityType.name = createActivityTypeDto.name;
    activityType.description = createActivityTypeDto.description;
    activityType.createAt = new Date();
    activityType.lastUpdate = activityType.createAt;
    return await this.activityTypeRepository.save(activityType).catch((error) => {
      switch (error.code) {
        case 'ER_DUP_ENTRY':
          throw new ConflictException(error.message);
          break;
      }
    });
  }

  async findAll(query: PaginateQuery): Promise<Paginated<ActivityType>> {
    return await paginate(query, this.activityTypeRepository, {
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

  findOne(id: string) {
    return this.activityTypeRepository.findOneBy({ id });
  }

  async update(id: string, updateActivityTypeDto: UpdateActivityTypeDto) {
    return await this.activityTypeRepository
      .update(id, updateActivityTypeDto)
      .catch((error) => {
        switch (error.code) {
          case 'ER_DUP_ENTRY':
            throw new ConflictException(error.message);
            break;
        }
      });
  }

  async remove(id: string) {
    return await this.activityTypeRepository.delete(id);
  }

  findItemsByActivityType(id: string) {
    throw new Error('Method not implemented.');
  }
}
