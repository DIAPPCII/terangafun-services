import { Test, TestingModule } from '@nestjs/testing';
import { UserApiResolver } from './user-api.resolver';
import { UserApiService } from './user-api.service';

describe('UserApiResolver', () => {
  let resolver: UserApiResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserApiResolver, UserApiService],
    }).compile();

    resolver = module.get<UserApiResolver>(UserApiResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
