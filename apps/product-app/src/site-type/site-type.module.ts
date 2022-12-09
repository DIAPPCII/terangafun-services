import { Module } from '@nestjs/common';
import { SiteTypeService } from './site-type.service';
import { SiteTypeController } from './site-type.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { SiteType } from "./entities/site-type.entity";

@Module({
  imports: [TypeOrmModule.forFeature([SiteType])],
  controllers: [SiteTypeController],
  providers: [SiteTypeService]
})
export class SiteTypeModule {}
