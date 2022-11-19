import { IsNotEmpty } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty({ message: 'field [name] should not be empty or null' })
  name: string;
  description: string;
  @IsNotEmpty({ message: 'field [owner] should not be empty or null' })
  owner: string;
}
