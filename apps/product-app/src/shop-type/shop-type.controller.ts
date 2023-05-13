import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { ShopTypeService } from "./shop-type.service";
import { CreateShopTypeDto } from "./dto/create-shop-type.dto";
import { UpdateShopTypeDto } from "./dto/update-shop-type.dto";
import { Paginate, PaginateQuery } from "nestjs-paginate";

@Controller("shop-type")
export class ShopTypeController {
  constructor(private readonly shopTypeService: ShopTypeService) {}

  @Post()
  create(@Body(new ValidationPipe()) createShopTypeDto: CreateShopTypeDto) {
    return this.shopTypeService.create(createShopTypeDto);
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery) {
    return this.shopTypeService.findAll(query);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.shopTypeService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateShopTypeDto: UpdateShopTypeDto) {
    return this.shopTypeService.update(id, updateShopTypeDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.shopTypeService.remove(id);
  }
}
