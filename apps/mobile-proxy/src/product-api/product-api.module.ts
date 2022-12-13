import { Module } from "@nestjs/common";
import { ProductApiService } from "./product-api.service";
import { ProductApiResolver } from "./product-api.resolver";

@Module({
  providers: [ProductApiResolver, ProductApiService],
})
export class ProductApiModule {}
