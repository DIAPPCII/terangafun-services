import { Query, Resolver } from "@nestjs/graphql";
import { ProductApiService } from "./product-api.service";

@Resolver("ProductApi")
export class ProductApiResolver {
  constructor(private readonly productApiService: ProductApiService) {}

  @Query("categories")
  findCategories(page = 0, limit = 10) {
    return this.productApiService.findCategories();
  }

  /*@Mutation('createProductApi')
  create(@Args('createProductApiInput') createProductApiInput: CreateProductApiInput) {
    return this.productApiService.create(createProductApiInput);
  }

  @Query('productApi')
  findAll() {
    return this.productApiService.findAll();
  }

  @Query('productApi')
  findOne(@Args('id') id: number) {
    return this.productApiService.findOne(id);
  }

  @Mutation('updateProductApi')
  update(@Args('updateProductApiInput') updateProductApiInput: UpdateProductApiInput) {
    return this.productApiService.update(updateProductApiInput.id, updateProductApiInput);
  }

  @Mutation('removeProductApi')
  remove(@Args('id') id: number) {
    return this.productApiService.remove(id);
  }*/
}
