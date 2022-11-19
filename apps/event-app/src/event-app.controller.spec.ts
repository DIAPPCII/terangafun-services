import { Test, TestingModule } from '@nestjs/testing';
import { EventAppController } from './event-app.controller';
import { EventAppService } from './event-app.service';

describe('EventAppController', () => {
  let eventAppController: EventAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [EventAppController],
      providers: [EventAppService],
    }).compile();

    eventAppController = app.get<EventAppController>(EventAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(eventAppController.getHello()).toBe('Hello World!');
    });
  });
});
