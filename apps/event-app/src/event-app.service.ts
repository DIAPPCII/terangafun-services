import { Injectable } from '@nestjs/common';

@Injectable()
export class EventAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
