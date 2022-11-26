import { PartialType } from '@nestjs/mapped-types';
import { CreateBusinessDto } from './create-business.dto';
import { User } from '../../../../user-app/src/users/entities/user.entity';
import { BusinessType } from '../../business-type/entities/business-type.entity';

export class UpdateBusinessDto extends PartialType(CreateBusinessDto) {
  name: string;
  isPublic: boolean;
  isVerified: boolean;
  description: string;
  admins: User[];
  types: BusinessType[];
}
