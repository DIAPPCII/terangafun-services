import { Controller, Get } from '@nestjs/common';
import { BusinessAppService } from './business-app.service';

@Controller()
export class BusinessAppController {
  constructor(private readonly businessAppService: BusinessAppService) {}

  @Get()
  getHello(): string {
    return this.businessAppService.getHello();
  }
}
