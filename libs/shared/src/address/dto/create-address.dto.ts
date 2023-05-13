import { IsNotEmpty } from "class-validator";

export class CreateAddressDto {
  @IsNotEmpty({ message: "field [address] should not be empty or null" })
  address: string;
  postalCode: string;
  @IsNotEmpty({ message: "field [city] should not be empty or null" })
  city: string;
  state: string;
  @IsNotEmpty({ message: "field [country] should not be empty or null" })
  country: string;
  latitude: string;
  longitude: string;
}
