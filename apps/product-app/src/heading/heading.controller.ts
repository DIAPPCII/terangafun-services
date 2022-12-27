import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { HeadingService } from "./heading.service";
import { CreateHeadingDto } from "./dto/create-heading.dto";
import { UpdateHeadingDto } from "./dto/update-heading.dto";
import { Paginate, PaginateQuery } from "nestjs-paginate";

@Controller("heading")
export class HeadingController {
  constructor(private readonly headingService: HeadingService) {}

  @Post()
  create(@Body(new ValidationPipe()) createHeadingDto: CreateHeadingDto) {
    return this.headingService.create(createHeadingDto);
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery) {
    return this.headingService.findAll(query);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.headingService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateHeadingDto: UpdateHeadingDto) {
    return this.headingService.update(+id, updateHeadingDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.headingService.remove(+id);
  }
}
