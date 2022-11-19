import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
