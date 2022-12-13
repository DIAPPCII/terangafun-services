import { NestFactory } from "@nestjs/core";
import { MobileProxyModule } from "./mobile-proxy.module";

async function bootstrap() {
  const app = await NestFactory.create(MobileProxyModule);
  await app.listen(8080);
}

bootstrap();
