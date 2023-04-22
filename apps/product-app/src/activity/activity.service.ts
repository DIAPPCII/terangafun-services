import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterOperator, paginate, Paginated, PaginateQuery } from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { Activity } from './entities/activity.entity';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}

  async create(createActivityDto: CreateActivityDto) {
    const activity = new Activity();
    activity.name = createActivityDto.name;
    activity.description = createActivityDto.description;
    activity.createAt = new Date();
    activity.lastUpdate = activity.createAt;
    return await this.activityRepository.save(activity).catch((error) => {
      switch (error.code) {
        case 'ER_DUP_ENTRY':
          throw new ConflictException(error.message);
          break;
      }
    });
  }

  async findAll(query: PaginateQuery): Promise<Paginated<Activity>> {
    return await paginate(query, this.activityRepository, {
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
    return this.activityRepository.findOneBy({ id });
  }

  async update(id: string, updateActivityDto: UpdateActivityDto) {
    return await this.activityRepository
      .update(id, updateActivityDto)
      .catch((error) => {
        switch (error.code) {
          case 'ER_DUP_ENTRY':
            throw new ConflictException(error.message);
            break;
        }
      });
  }

  async remove(id: string) {
    return await this.activityRepository.delete(id);
  }

  findItemsByActivity(id: string) {
    throw new Error('Method not implemented.');
  }
}
