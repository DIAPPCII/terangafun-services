import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { ActivityService } from './activity.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';

@Controller('activity')
export class ActivityController {
  constructor(private readonly categoryService: ActivityService) {}

  @Post()
  create(@Body(new ValidationPipe()) createActivityDto: CreateActivityDto) {
    return this.categoryService.create(createActivityDto);
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery) {
    return this.categoryService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Get(':id/items')
  findItemsByActivity(@Param('id') id: string) {
    return this.categoryService.findItemsByActivity(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateActivityDto: UpdateActivityDto,
  ) {
    return this.categoryService.update(id, updateActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
