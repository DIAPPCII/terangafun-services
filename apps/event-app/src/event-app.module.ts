import { Module } from '@nestjs/common';
import { EventAppController } from './event-app.controller';
import { EventAppService } from './event-app.service';
import { EventTypeModule } from './event-type/event-type.module';

@Module({
  imports: [EventTypeModule],
  controllers: [EventAppController],
  providers: [EventAppService],
})
export class EventAppModule {}
