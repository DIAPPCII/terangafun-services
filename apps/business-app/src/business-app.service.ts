import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
