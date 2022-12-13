import { Injectable } from "@nestjs/common";
import { CreateProductApiInput } from "./dto/create-product-api.input";
import { UpdateProductApiInput } from "./dto/update-product-api.input";
import { RESTDataSource } from "@apollo/datasource-rest";

@Injectable()
export class ProductApiService extends RESTDataSource {
  baseURL = "http://localhost:4000";

  create(createProductApiInput: CreateProductApiInput) {
    return "This action adds a new productApi";
  }

  async findCategories() {
    const result = await this.get("category");
    return result.data;
  }

  findOne(id: number) {
    return `This action returns a #${id} productApi`;
  }

  update(id: number, updateProductApiInput: UpdateProductApiInput) {
    return `This action updates a #${id} productApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} productApi`;
  }
}
