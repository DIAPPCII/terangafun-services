import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from "@nestjs/common";
import { SiteTypeService } from './site-type.service';
import { CreateSiteTypeDto } from './dto/create-site-type.dto';
import { UpdateSiteTypeDto } from './dto/update-site-type.dto';
import { Paginate, PaginateQuery } from "nestjs-paginate";

@Controller('site-type')
export class SiteTypeController {
  constructor(private readonly siteTypeService: SiteTypeService) {}

  @Post()
  create(@Body(new ValidationPipe()) createSiteTypeDto: CreateSiteTypeDto) {
    return this.siteTypeService.create(createSiteTypeDto);
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery) {
    return this.siteTypeService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.siteTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body(new ValidationPipe()) updateSiteTypeDto: UpdateSiteTypeDto) {
    return this.siteTypeService.update(+id, updateSiteTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.siteTypeService.remove(+id);
  }
}
