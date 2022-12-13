import { Injectable } from "@nestjs/common";

@Injectable()
export class MobileProxyService {
  getHello(): string {
    return "Hello World!";
  }
}
