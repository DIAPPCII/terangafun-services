import { Module } from "@nestjs/common";
import { ShopTypeService } from "./shop-type.service";
import { ShopTypeController } from "./shop-type.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShopType } from "./entities/shop-type.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ShopType])],
  controllers: [ShopTypeController],
  providers: [ShopTypeService],
})
export class ShopTypeModule {}
