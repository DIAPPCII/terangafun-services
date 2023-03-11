import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { Media } from "./media/entities/media.entity";
import { MediaModule } from "./media/media.module";
import { SharedService } from "./shared.service";
import { Tag } from "./tag/entities/tag.entity";
import { TagModule } from "./tag/tag.module";
import { Event } from "apps/event-app/src/entities/event.entity";
import { EventType } from "apps/event-app/src/event-type/entities/event-type.entity";
import { User } from "apps/user-app/src/users/entities/user.entity";

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([Event, EventType, User]),
    TypeOrmModule.forRoot({
      type: "mysql",
      username: "diappci",
      password: "tFun2022#",
      host: "tfun-dev.cjmqfgeh0fox.eu-west-3.rds.amazonaws.com",
      database: "tfundb_dev",
      entities: [Media, Tag, Event, EventType, User],
      synchronize: true,
      logging: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    MediaModule,
    TagModule,
  ],
  providers: [SharedService],
  exports: [SharedService],
})
export class SharedModule {}
