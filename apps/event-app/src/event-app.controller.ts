import { Controller, Get } from '@nestjs/common';
import { EventAppService } from './event-app.service';

@Controller()
export class EventAppController {
  constructor(private readonly eventAppService: EventAppService) {}

  @Get()
  getHello(): string {
    return this.eventAppService.getHello();
  }
}
