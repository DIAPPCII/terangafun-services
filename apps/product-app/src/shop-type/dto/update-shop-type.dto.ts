import { PartialType } from "@nestjs/swagger";
import { CreateShopTypeDto } from "./create-shop-type.dto";
import { IsNotEmpty } from "class-validator";

export class UpdateShopTypeDto extends PartialType(CreateShopTypeDto) {
  @IsNotEmpty({ message: "field [name] should not be empty or null" })
  name: string;
  description: string;
}
