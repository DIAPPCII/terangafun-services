import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { AuthController } from "./auth/auth.controller";
import { InterestService } from "../interest/interest.service";
import { InterestModule } from "../interest/interest.module";
import { FollowshipModule } from "../followship/followship.module";

@Module({
  imports: [TypeOrmModule.forFeature([User]), InterestModule, FollowshipModule],
  controllers: [UsersController, AuthController],
  providers: [UsersService],
})
export class UsersModule {}
