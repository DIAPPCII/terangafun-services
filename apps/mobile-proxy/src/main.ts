import { NestFactory } from "@nestjs/core";
import { MobileProxyModule } from "./mobile-proxy.module";
import { GraphQLSchemaFactory, GraphQLSchemaHost } from "@nestjs/graphql";
import { writeFileSync } from "fs";
import { CognitoResolver } from "./cognito/cognito.resolver";
import { ProductApiResolver } from "./product-api/product-api.resolver";
import { join } from "path";
import { printSchema } from "graphql/utilities";

async function bootstrap() {
  const app = await NestFactory.create(MobileProxyModule);
  await app.listen(8080);
  //const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
  //const schema = await gqlSchemaFactory.create([CognitoResolver, ProductApiResolver]);
  //console.log(schema);
  //writeFileSync(join(process.cwd(), "/schema.graphql"), printSchema(schema));
}

bootstrap();
