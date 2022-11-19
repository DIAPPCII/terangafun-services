import { Category } from '../../category/entities/category.entity';

export class UpdateItemDto {
  name: string;
  description: string;
  owner: string;
  categories: Category[];
}
