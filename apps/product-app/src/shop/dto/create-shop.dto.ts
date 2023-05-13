import { IsNotEmpty } from "class-validator";
import { ShopType } from "../../shop-type/entities/shop-type.entity";
import { CreateAddressDto } from "@terangafun/shared/address/dto/create-address.dto";

export class CreateShopDto {
  @IsNotEmpty({ message: "field [name] should not be empty or null" })
  name: string;
  description: string;
  @IsNotEmpty({ message: "field [types] should not be empty or null" })
  types: ShopType[];
  phoneNumber: string;
  email: string;
  @IsNotEmpty({ message: "field [address] should not be empty or null" })
  address: CreateAddressDto;
}
