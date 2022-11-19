import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterOperator, paginate, Paginated, PaginateQuery } from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = new Category();
    category.name = createCategoryDto.name;
    category.description = createCategoryDto.description;
    category.createAt = new Date();
    category.lastUpdate = category.createAt;
    return await this.categoryRepository.save(category).catch((error) => {
      switch (error.code) {
        case 'ER_DUP_ENTRY':
          throw new ConflictException(error.message);
          break;
      }
    });
  }

  async findAll(query: PaginateQuery): Promise<Paginated<Category>> {
    return await paginate(query, this.categoryRepository, {
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
    return this.categoryRepository.findOneBy({ id });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryRepository
      .update(id, updateCategoryDto)
      .catch((error) => {
        switch (error.code) {
          case 'ER_DUP_ENTRY':
            throw new ConflictException(error.message);
            break;
        }
      });
  }

  async remove(id: string) {
    return await this.categoryRepository.delete(id);
  }

  findItemsByCategory(id: string) {
    throw new Error('Method not implemented.');
  }
}
