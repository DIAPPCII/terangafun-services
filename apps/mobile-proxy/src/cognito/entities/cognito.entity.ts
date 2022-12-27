import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Cognito {
  @Field(() => Int, { description: "Example field (placeholder)" })
  exampleField: number;
}
