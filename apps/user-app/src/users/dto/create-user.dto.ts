import { IsEmail, IsNotEmpty, ValidateIf } from 'class-validator';

export class CreateUserDto {
  //@IsMobilePhone()
  @ValidateIf((object, value) => value !== null)
  phone!: string | null;
  @IsEmail()
  @ValidateIf((object, value) => value !== null)
  email!: string | null;
  firstName: string;
  lastName: string;
  @IsNotEmpty()
  password: string;
}
