import { Resolver } from "@nestjs/graphql";
import { CognitoService } from "./cognito.service";

@Resolver("CognitoApi")
export class CognitoResolver {
  constructor(private readonly cognitoService: CognitoService) {}

  /*@Mutation(() => Cognito)
  createCognito(@Args("createCognitoInput") createCognitoInput: CreateCognitoInput) {
    return this.cognitoService.create(createCognitoInput);
  }

  @Query(() => [Cognito], { name: "cognito" })
  findAll() {
    return this.cognitoService.findAll();
  }

  @Query(() => Cognito, { name: "cognito" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.cognitoService.findOne(id);
  }

  @Mutation(() => Cognito)
  updateCognito(@Args("updateCognitoInput") updateCognitoInput: UpdateCognitoInput) {
    return this.cognitoService.update(updateCognitoInput.id, updateCognitoInput);
  }

  @Mutation(() => Cognito)
  removeCognito(@Args("id", { type: () => Int }) id: number) {
    return this.cognitoService.remove(id);
  }*/
}
