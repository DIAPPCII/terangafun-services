import { Module } from "@nestjs/common";
import { CognitoService } from "./cognito.service";
import { CognitoResolver } from "./cognito.resolver";

@Module({
  providers: [CognitoResolver, CognitoService],
})
export class CognitoModule {}
