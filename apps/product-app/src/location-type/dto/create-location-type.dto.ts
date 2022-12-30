import { IsNotEmpty } from "class-validator";

export class CreateLocationTypeDto {
  @IsNotEmpty({ message: "field [name] should not be empty or null" })
  name: string;
  description: string;
}
