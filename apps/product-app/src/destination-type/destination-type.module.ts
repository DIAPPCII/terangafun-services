import { Module } from "@nestjs/common";
import { DestinationTypeService } from "./destination-type.service";
import { DestinationTypeController } from "./destination-type.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DestinationType } from "./entities/destination-type.entity";

@Module({
  imports: [TypeOrmModule.forFeature([DestinationType])],
  controllers: [DestinationTypeController],
  providers: [DestinationTypeService],
})
export class DestinationTypeModule {}
