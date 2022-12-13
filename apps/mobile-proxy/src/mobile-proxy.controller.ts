import { Controller, Get } from "@nestjs/common";
import { MobileProxyService } from "./mobile-proxy.service";

@Controller()
export class MobileProxyController {
  constructor(private readonly mobileProxyService: MobileProxyService) {}

  @Get()
  getHello(): string {
    return this.mobileProxyService.getHello();
  }
}
