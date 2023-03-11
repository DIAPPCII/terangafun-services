import { Test, TestingModule } from "@nestjs/testing";
import { ShopTypeController } from "./shop-type.controller";
import { ShopTypeService } from "./shop-type.service";

describe("ShopTypeController", () => {
  let controller: ShopTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShopTypeController],
      providers: [ShopTypeService],
    }).compile();

    controller = module.get<ShopTypeController>(ShopTypeController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
