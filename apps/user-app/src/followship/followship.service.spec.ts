import { Test, TestingModule } from '@nestjs/testing';
import { FollowshipService } from './followship.service';

describe('FollowshipService', () => {
  let service: FollowshipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FollowshipService],
    }).compile();

    service = module.get<FollowshipService>(FollowshipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
