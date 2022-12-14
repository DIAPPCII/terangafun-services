import { Module } from '@nestjs/common';
import { ProductAppController } from './product-app.controller';
import { ProductAppService } from './product-app.service';
import { CategoryModule } from './category/category.module';
import { ItemModule } from './item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category/entities/category.entity';
import { Item } from './item/entities/item.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'tfun-dev.cjmqfgeh0fox.eu-west-3.rds.amazonaws.com',
      port: 3306,
      username: 'diappci',
      password: 'tFun2022#',
      database: 'tfundb_dev',
      entities: [Category, Item],
      synchronize: true,
      logging: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    CategoryModule,
    ItemModule,
    TagModule,
  ],
  controllers: [ProductAppController],
  providers: [ProductAppService],
})
export class ProductAppModule {}
