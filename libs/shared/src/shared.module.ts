import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { Media } from "./media/entities/media.entity";
import { MediaModule } from "./media/media.module";
import { SharedService } from "./shared.service";
import { Tag } from "./tag/entities/tag.entity";
import { TagModule } from "./tag/tag.module";
import { AddressModule } from "./address/address.module";
import { Address } from "@terangafun/shared/address/entities/address.entity";

@Global()
@Module({
  imports: [
    //TypeOrmModule.forFeature([Event, EventType, User]),
    TypeOrmModule.forRoot({
      type: "mysql",
      username: "diappci",
      password: "tFun2022#",
      host: "tfun-dev.cjmqfgeh0fox.eu-west-3.rds.amazonaws.com",
      database: "tfundb_dev",
      entities: [Media, Tag, Address],
      synchronize: true,
      logging: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    MediaModule,
    TagModule,
    AddressModule,
  ],
  providers: [SharedService],
  exports: [SharedService, AddressModule],
})
export class SharedModule {}
