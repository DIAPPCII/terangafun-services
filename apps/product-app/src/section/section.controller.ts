import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from "@nestjs/common";
import { SectionService } from "./section.service";
import { CreateSectionDto } from "./dto/create-section.dto";
import { UpdateSectionDto } from "./dto/update-section.dto";
import { Paginate, PaginateQuery } from "nestjs-paginate";

@Controller("section")
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Post()
  create(@Body(new ValidationPipe()) createSectionDto: CreateSectionDto) {
    return this.sectionService.create(createSectionDto);
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery) {
    return this.sectionService.findAll(query);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.sectionService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateSectionDto: UpdateSectionDto) {
    return this.sectionService.update(+id, updateSectionDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.sectionService.remove(+id);
  }
}
