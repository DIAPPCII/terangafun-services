import { TagService } from './tag.service';
import { TagDto, UpdateTagDto } from './dto/tag.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { Tag } from './entities/tag.entity';
import { DeleteResult } from 'typeorm';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService,) {}

  @Post()
  async create(@Body() createTagDto: TagDto) : Promise<Tag> {
    return this.tagService.create(createTagDto);
  }

  @Get()
  async findAll() : Promise<Tag[]> {
    return this.tagService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) : Promise<Tag> {
    return this.tagService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) : Promise<Tag> {
    return this.tagService.update(id, updateTagDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) : Promise<DeleteResult> {
    return this.tagService.remove(id);
  }
}
