import { IsNotEmpty } from 'class-validator';
import { ActivityType } from '../../activity-type/entities/activity-type.entity';

export class CreateActivityDto {
  @IsNotEmpty({ message: 'field [name] should not be empty or null' })
  name: string;
  description: string;
  address: string;
  types : ActivityType[];
  tips: string;
  priceMin : number;
  priceMax : number;
}
