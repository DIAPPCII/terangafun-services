import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HeadingService } from './heading.service';
import { CreateHeadingDto } from './dto/create-heading.dto';
import { UpdateHeadingDto } from './dto/update-heading.dto';

@Controller('heading')
export class HeadingController {
  constructor(private readonly headingService: HeadingService) {}

  @Post()
  create(@Body() createHeadingDto: CreateHeadingDto) {
    return this.headingService.create(createHeadingDto);
  }

  @Get()
  findAll() {
    return this.headingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.headingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHeadingDto: UpdateHeadingDto) {
    return this.headingService.update(+id, updateHeadingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.headingService.remove(+id);
  }
}
