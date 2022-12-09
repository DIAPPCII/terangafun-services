import { Test, TestingModule } from '@nestjs/testing';
import { SiteTypeService } from './site-type.service';

describe('SiteTypeService', () => {
  let service: SiteTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SiteTypeService],
    }).compile();

    service = module.get<SiteTypeService>(SiteTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
