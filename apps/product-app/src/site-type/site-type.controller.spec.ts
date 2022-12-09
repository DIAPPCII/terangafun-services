import { Test, TestingModule } from '@nestjs/testing';
import { SiteTypeController } from './site-type.controller';
import { SiteTypeService } from './site-type.service';

describe('SiteTypeController', () => {
  let controller: SiteTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteTypeController],
      providers: [SiteTypeService],
    }).compile();

    controller = module.get<SiteTypeController>(SiteTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
