import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
export class MediaDto {
  @IsNotEmpty()
  @IsString()
  label: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsNotEmpty()
  @IsString()
  url: string;
}

export class UpdateMediaDto extends PartialType(MediaDto) {}
