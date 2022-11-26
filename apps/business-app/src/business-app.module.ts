import { Module } from '@nestjs/common';
import { BusinessAppController } from './business-app.controller';
import { BusinessAppService } from './business-app.service';
import { BusinessModule } from './business/business.module';
import { BusinessTypeModule } from './business-type/business-type.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Business } from './business/entities/business.entity';
import { BusinessType } from './business-type/entities/business-type.entity';
import { User } from '../../user-app/src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'tfun-dev.cjmqfgeh0fox.eu-west-3.rds.amazonaws.com',
      port: 3306,
      username: 'diappci',
      password: 'tFun2022#',
      database: 'tfundb_dev',
      entities: [Business, BusinessType, User],
      synchronize: true,
      logging: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    BusinessModule,
    BusinessTypeModule,
  ],
  controllers: [BusinessAppController],
  providers: [BusinessAppService],
})
export class BusinessAppModule {}
