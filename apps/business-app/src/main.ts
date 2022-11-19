import { NestFactory } from '@nestjs/core';
import { BusinessAppModule } from './business-app.module';

async function bootstrap() {
  const app = await NestFactory.create(BusinessAppModule, {
    logger: ['debug', 'error', 'log', 'warn'],
  });
  await app.listen(5000);
}
bootstrap();
