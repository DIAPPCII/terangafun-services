import { NestFactory } from '@nestjs/core';
import { EventAppModule } from './event-app.module';

async function bootstrap() {
  const app = await NestFactory.create(EventAppModule);
  await app.listen(3000);
}
bootstrap();
