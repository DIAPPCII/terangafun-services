import { CreateProductApiInput } from "./create-product-api.input";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateProductApiInput extends PartialType(CreateProductApiInput) {
  id: number;
}
