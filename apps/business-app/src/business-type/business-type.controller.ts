import { ValidationPipe } from '@nestjs/common';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { BusinessTypeService } from './business-type.service';
import { CreateBusinessTypeDto } from './dto/create-business-type.dto';
import { UpdateBusinessTypeDto } from './dto/update-business-type.dto';

@Controller('business-type')
export class BusinessTypeController {
  constructor(private readonly businessTypeService: BusinessTypeService) {}

  @Post()
  create(
    @Body(new ValidationPipe()) createBusinessTypeDto: CreateBusinessTypeDto,
  ) {
    return this.businessTypeService.create(createBusinessTypeDto);
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery) {
    return this.businessTypeService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessTypeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateBusinessTypeDto: UpdateBusinessTypeDto,
  ) {
    return this.businessTypeService.update(id, updateBusinessTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessTypeService.remove(id);
  }
}
