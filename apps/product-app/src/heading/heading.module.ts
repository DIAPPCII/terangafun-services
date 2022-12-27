import { Module } from "@nestjs/common";
import { HeadingService } from "./heading.service";
import { HeadingController } from "./heading.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Heading } from "./entities/heading.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Heading])],
  controllers: [HeadingController],
  providers: [HeadingService],
})
export class HeadingModule {}
