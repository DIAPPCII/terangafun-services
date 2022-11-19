import { Test, TestingModule } from '@nestjs/testing';
import { BusinessAppController } from './business-app.controller';
import { BusinessAppService } from './business-app.service';

describe('BusinessAppController', () => {
  let businessAppController: BusinessAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BusinessAppController],
      providers: [BusinessAppService],
    }).compile();

    businessAppController = app.get<BusinessAppController>(BusinessAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(businessAppController.getHello()).toBe('Hello World!');
    });
  });
});
