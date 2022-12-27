import { Module } from "@nestjs/common";
import { MobileProxyController } from "./mobile-proxy.controller";
import { MobileProxyService } from "./mobile-proxy.service";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ProductApiModule } from "./product-api/product-api.module";
import { CognitoModule } from "./cognito/cognito.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      typePaths: ["./**/*.graphql"],
    }),
    ProductApiModule,
    CognitoModule,
  ],
  controllers: [MobileProxyController],
  providers: [MobileProxyService],
})
export class MobileProxyModule {}
