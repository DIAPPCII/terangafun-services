import { Module } from "@nestjs/common";
import { MobileProxyController } from "./mobile-proxy.controller";
import { MobileProxyService } from "./mobile-proxy.service";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ProductApiModule } from "./product-api/product-api.module";
import { CognitoModule } from "./cognito/cognito.module";
import { UserApiModule } from "./user-api/user-api.module";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      typePaths: ["./**/*.graphql"],
      /*definitions: {
        path: join(process.cwd(), "src/graphql.ts"),
        outputAs: "class",
      },*/
    }),
    ProductApiModule,
    CognitoModule,
    UserApiModule,
  ],
  controllers: [MobileProxyController],
  providers: [MobileProxyService],
})
export class MobileProxyModule {}
