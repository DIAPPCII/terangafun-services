import { Module } from '@nestjs/common';
import { UserAppController } from './user-app.controller';
import { UserAppService } from './user-app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { InterestModule } from './interest/interest.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'tfun-dev.cjmqfgeh0fox.eu-west-3.rds.amazonaws.com',
      port: 3306,
      username: 'diappci',
      password: 'tFun2022#',
      database: 'tfundb_dev',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    UsersModule,
    InterestModule,
  ],
  controllers: [UserAppController],
  providers: [UserAppService],
})
export class UserAppModule {}
