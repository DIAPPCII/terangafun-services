import { BusinessType } from '../../business-type/entities/business-type.entity';
import { User } from '../../../../user-app/src/users/entities/user.entity';
import { IsNotEmpty } from 'class-validator';

export class CreateBusinessDto {
  @IsNotEmpty({ message: 'field [name] should not be empty or null' })
  name: string;
  description: string;
  types: BusinessType[];
  admin: User;
}
