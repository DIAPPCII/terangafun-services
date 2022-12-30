import { Module } from '@nestjs/common';
import { UserApiService } from './user-api.service';
import { UserApiResolver } from './user-api.resolver';

@Module({
  providers: [UserApiResolver, UserApiService]
})
export class UserApiModule {}
