import { CreateCognitoInput } from "./create-cognito.input";
import { Field, InputType, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateCognitoInput extends PartialType(CreateCognitoInput) {
  @Field(() => Int)
  id: number;
}
