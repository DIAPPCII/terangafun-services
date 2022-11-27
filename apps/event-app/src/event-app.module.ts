import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedModule } from 'terangafun/shared';
import { Media } from 'terangafun/shared/media/entities/media.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { EventAppController } from './event-app.controller';
import { EventAppService } from './event-app.service';
import { EventType } from './event-type/entities/event-type.entity';
import { EventTypeModule } from './event-type/event-type.module';
import { Event } from './entities/event.entity';
import { Tag } from 'terangafun/shared/tag/entities/tag.entity';
import { User } from 'apps/user-app/src/users/entities/user.entity';
import { UserAppModule } from 'apps/user-app/src/user-app.module';

@Module({
  imports: [TypeOrmModule.forFeature([Event, User]), TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'tfun-dev.cjmqfgeh0fox.eu-west-3.rds.amazonaws.com',
    port: 3306,
    username: 'diappci',
    password: 'tFun2022#',
    database: 'tfundb_dev',
    entities: [EventType, Event, Media, Tag, User],
    synchronize: true,
    logging: true,
    namingStrategy: new SnakeNamingStrategy(),
  }), EventTypeModule, SharedModule, UserAppModule],
  controllers: [EventAppController],
  providers: [EventAppService],
  exports: [TypeOrmModule],
})
export class EventAppModule {}
