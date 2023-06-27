import { Test, TestingModule } from "@nestjs/testing";
import { DestinationTypeController } from "./destination-type.controller";
import { DestinationTypeService } from "./destination-type.service";

describe("DestinationTypeController", () => {
  let controller: DestinationTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DestinationTypeController],
      providers: [DestinationTypeService],
    }).compile();

    controller = module.get<DestinationTypeController>(DestinationTypeController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
