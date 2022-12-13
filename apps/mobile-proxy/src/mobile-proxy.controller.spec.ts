import { Test, TestingModule } from "@nestjs/testing";
import { MobileProxyController } from "./mobile-proxy.controller";
import { MobileProxyService } from "./mobile-proxy.service";

describe("MobileProxyController", () => {
  let mobileProxyController: MobileProxyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MobileProxyController],
      providers: [MobileProxyService],
    }).compile();

    mobileProxyController = app.get<MobileProxyController>(MobileProxyController);
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      expect(mobileProxyController.getHello()).toBe("Hello World!");
    });
  });
});
