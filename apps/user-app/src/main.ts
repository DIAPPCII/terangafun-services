import { NestFactory } from '@nestjs/core';
import { UserAppModule } from './user-app.module';

async function bootstrap() {
  const app = await NestFactory.create(UserAppModule);
  await app.listen(3000);
}
bootstrap();
