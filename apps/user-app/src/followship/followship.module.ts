import { Module } from "@nestjs/common";
import { FollowshipService } from "./followship.service";
import { FollowshipController } from "./followship.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Followship } from "./entities/followship.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Followship])],
  exports: [FollowshipService],
  controllers: [FollowshipController],
  providers: [FollowshipService],
})
export class FollowshipModule {}
