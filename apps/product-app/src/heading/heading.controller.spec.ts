import { Test, TestingModule } from '@nestjs/testing';
import { HeadingController } from './heading.controller';
import { HeadingService } from './heading.service';

describe('HeadingController', () => {
  let controller: HeadingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HeadingController],
      providers: [HeadingService],
    }).compile();

    controller = module.get<HeadingController>(HeadingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
