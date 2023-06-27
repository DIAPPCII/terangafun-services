import { Module } from "@nestjs/common";
import { ProductAppController } from "./product-app.controller";
import { ProductAppService } from "./product-app.service";
import { CategoryModule } from "./category/category.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { TagModule } from "./tag/tag.module";
import { HeadingModule } from "./heading/heading.module";
import { SiteModule } from "./site/site.module";
import { SiteTypeModule } from "./site-type/site-type.module";
import { SectionModule } from "./section/section.module";
import { LocationModule } from "./location/location.module";
import { LocationTypeModule } from "./location-type/location-type.module";
import { EurekaModule } from "nestjs-eureka";
import { ShopModule } from "./shop/shop.module";
import { ShopTypeModule } from "./shop-type/shop-type.module";
import { SharedModule } from "@terangafun/shared";
import { ActivityModule } from "./activity/activity.module";
import { ProductModule } from "./product/product.module";
import { ActivityType } from "./activity-type/entities/activity-type.entity";
import { DestinationModule } from "./destination/destination.module";
import { DestinationTypeModule } from "./destination-type/destination-type.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "tfun-dev.cjmqfgeh0fox.eu-west-3.rds.amazonaws.com",
      port: 3306,
      username: "diappci",
      password: "tFun2022#",
      database: "tfundb_dev",
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      namingStrategy: new SnakeNamingStrategy(),
    }),
    EurekaModule.forRoot({
      disable: false,
      disableDiscovery: false,
      eureka: {
        host: process.env.EUREKA_HOST || "localhost",
        port: process.env.EUREKA_PORT || 8761,
        servicePath: "/eureka/apps",
        maxRetries: 10,
        requestRetryDelay: 10000,
      },
      service: {
        name: "PRODUCT-SERVICE",
        port: parseInt(process.env.APP_PORT) || 4000,
      },
    }),
    CategoryModule,
    ProductModule,
    ActivityModule,
    ActivityModule,
    ActivityType,
    TagModule,
    HeadingModule,
    SiteModule,
    SiteTypeModule,
    SectionModule,
    LocationModule,
    LocationTypeModule,
    ShopModule,
    ShopTypeModule,
    SharedModule,
    DestinationModule,
    DestinationTypeModule,
  ],
  controllers: [ProductAppController],
  providers: [ProductAppService],
})
export class ProductAppModule {}
