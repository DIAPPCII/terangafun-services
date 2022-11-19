import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'tfun-dev.cjmqfgeh0fox.eu-west-3.rds.amazonaws.com',
      port: 3306,
      username: 'diappci',
      password: 'tFun2022#',
      database: 'tfundb_dev',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
      logging: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
