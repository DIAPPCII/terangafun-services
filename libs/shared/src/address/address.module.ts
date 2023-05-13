import { Module } from "@nestjs/common";
import { AddressService } from "./address.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Address } from "@terangafun/shared/address/entities/address.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  providers: [AddressService],
  exports: [TypeOrmModule, AddressModule],
})
export class AddressModule {}
