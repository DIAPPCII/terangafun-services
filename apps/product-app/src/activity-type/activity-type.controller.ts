import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { ActivityTypeService } from './activity-type.service';
import { CreateActivityTypeDto } from './dto/create-activity-type.dto';
import { UpdateActivityTypeDto } from './dto/update-activity-type.dto';

@Controller('activityType')
export class ActivityTypeController {
  constructor(private readonly activityTypeService: ActivityTypeService) {}

  @Post()
  create(@Body(new ValidationPipe()) createActivityTypeDto: CreateActivityTypeDto) {
    return this.activityTypeService.create(createActivityTypeDto);
  }

  @Get()
  findAll(@Paginate() query: PaginateQuery) {
    return this.activityTypeService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activityTypeService.findOne(id);
  }

  @Get(':id/items')
  findItemsByActivityType(@Param('id') id: string) {
    return this.activityTypeService.findItemsByActivityType(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateActivityTypeDto: UpdateActivityTypeDto,
  ) {
    return this.activityTypeService.update(id, updateActivityTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activityTypeService.remove(id);
  }
}
