import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventType } from './entities/event-type.entity';
import { EventTypeController } from './event-type.controller';
import { EventTypeService } from './event-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([EventType])],
  providers: [
    EventTypeService,
  ],
  controllers: [EventTypeController],
  exports: [TypeOrmModule],
})
export class EventTypeModule {}