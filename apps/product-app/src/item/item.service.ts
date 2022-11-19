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
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const item = new Item();
    item.name = createItemDto.name;
    item.description = createItemDto.description;
    item.owner = item.owner;
    item.categories = item.categories;
    item.createAt = new Date();
    item.lastUpdate = item.createAt;
    return await this.itemRepository.save(item).catch((error) => {
      switch (error.code) {
        case 'ER_DUP_ENTRY':
          throw new ConflictException(error.message);
          break;
      }
    });
  }

  async findAll(query: PaginateQuery): Promise<Paginated<Item>> {
    return await paginate(query, this.itemRepository, {
      relations: ['categories'],
      sortableColumns: [
        'id',
        'name',
        'createAt',
        'lastUpdate',
        'categories.id',
        'categories.name',
      ],
      //nullSort: 'first',
      searchableColumns: ['name', 'description'],
      defaultSortBy: [['createAt', 'DESC']],
      filterableColumns: {
        'categories.id': [FilterOperator.EQ],
        'categories.name': [FilterOperator.ILIKE],
        owner: [FilterOperator.EQ],
        categories: [FilterOperator.EQ],
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
    return this.itemRepository.find({
      where: { id: id },
      relations: ['categories']
    });
  }

  async update(id: string, updateItemDto: UpdateItemDto) {
    return await this.itemRepository
      .update(id, updateItemDto)
      .catch((error) => {
        switch (error.code) {
          case 'ER_DUP_ENTRY':
            throw new ConflictException(error.message);
            break;
        }
      });
  }

  async remove(id: string) {
    return await this.itemRepository.delete(id);
  }
}
