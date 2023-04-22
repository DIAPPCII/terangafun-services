import { BadRequestException, ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterOperator, paginate, Paginated, PaginateQuery } from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = new Product();
    product.name = createProductDto.name;
    product.description = createProductDto.description;
    product.createAt = new Date();
    product.lastUpdate = product.createAt;
    return await this.productRepository.save(product).catch((error) => {
      switch (error.code) {
        case 'ER_DUP_ENTRY':
          throw new ConflictException(error.message);
          break;
      }
    });
  }

  async findAll(query: PaginateQuery): Promise<Paginated<Product>> {
    return await paginate(query, this.productRepository, {
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
    return this.productRepository.findOneBy({ id });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return await this.productRepository
      .update(id, updateProductDto)
      .catch((error) => {
        switch (error.code) {
          case 'ER_DUP_ENTRY':
            throw new ConflictException(error.message);
            break;
        }
      });
  }

  async remove(id: string) {
    return await this.productRepository.delete(id);
  }

  findItemsByProduct(id: string) {
    throw new Error('Method not implemented.');
  }
}
