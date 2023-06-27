import { Test, TestingModule } from "@nestjs/testing";
import { DestinationTypeService } from "./destination-type.service";

describe("DestinationTypeService", () => {
  let service: DestinationTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DestinationTypeService],
    }).compile();

    service = module.get<DestinationTypeService>(DestinationTypeService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
