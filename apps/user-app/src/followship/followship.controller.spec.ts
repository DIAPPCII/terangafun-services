import { Test, TestingModule } from '@nestjs/testing';
import { FollowshipController } from './followship.controller';
import { FollowshipService } from './followship.service';

describe('FollowshipController', () => {
  let controller: FollowshipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FollowshipController],
      providers: [FollowshipService],
    }).compile();

    controller = module.get<FollowshipController>(FollowshipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
