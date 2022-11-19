import { NestFactory } from '@nestjs/core';
import { ProductAppModule } from './product-app.module';

async function bootstrap() {
  const app = await NestFactory.create(ProductAppModule, {
    logger: ['debug', 'error', 'log', 'warn'],
  });
  await app.listen(4000);
}
bootstrap();
