import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
export class TagDto {
  @IsNotEmpty()
  @IsString()
  label: string;
  @IsNotEmpty()
  @IsString()
  description: string;
}

export class UpdateTagDto extends PartialType(TagDto) {}
