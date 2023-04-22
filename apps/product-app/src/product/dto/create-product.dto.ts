import { IsNotEmpty } from 'class-validator';
import { Category } from '../../category/entities/category.entity';

export class CreateProductDto {
  @IsNotEmpty({ message: 'field [name] should not be empty or null' })
  name: string;
  description: string;
  types : 'Produit' | 'services';
  priceMin : number;
  priceMax : number;
  categories: Category[];
  size : string;
}
