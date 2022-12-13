import { Test, TestingModule } from "@nestjs/testing";
import { ProductApiResolver } from "./product-api.resolver";
import { ProductApiService } from "./product-api.service";

describe("ProductApiResolver", () => {
  let resolver: ProductApiResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductApiResolver, ProductApiService],
    }).compile();

    resolver = module.get<ProductApiResolver>(ProductApiResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
