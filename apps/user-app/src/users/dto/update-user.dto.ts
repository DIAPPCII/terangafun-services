import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { Gender } from '../entities/gender.enum';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  firstName: string;
  lastName: string;
  gender: Gender;
  birthDate: Date;
  isPublic: boolean;
  biography: string;
}
