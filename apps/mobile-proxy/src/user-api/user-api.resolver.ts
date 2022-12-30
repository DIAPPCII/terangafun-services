import { Args, Query, Resolver } from "@nestjs/graphql";
import { UserApiService } from "./user-api.service";

@Resolver("UserApi")
export class UserApiResolver {
  constructor(private readonly userApiService: UserApiService) {}

  @Query("user")
  findUserById(@Args("id") id: string) {
    return this.userApiService.findUserById(id);
  }
}
