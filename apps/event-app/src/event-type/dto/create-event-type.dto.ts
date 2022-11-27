import { IsNotEmpty, IsString } from 'class-validator';
export class CreateEventTypeDto {
  @IsNotEmpty()
  @IsString()
  label: string;
  @IsNotEmpty()
  @IsString()
  logo: string;
  @IsNotEmpty()
  @IsString()
  description: string;
}
