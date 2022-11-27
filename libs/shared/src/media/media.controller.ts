import { MediaService } from './media.service';
import { MediaDto, UpdateMediaDto } from './dto/media.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { Media } from './entities/media.entity';
import { DeleteResult } from 'typeorm';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService,) {}

  @Post()
  async create(@Body() createMediaDto: MediaDto) : Promise<Media> {
    return this.mediaService.create(createMediaDto);
  }

  @Get()
  async findAll() : Promise<Media[]> {
    return this.mediaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) : Promise<Media> {
    return this.mediaService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMediaDto: UpdateMediaDto) : Promise<Media> {
    return this.mediaService.update(id, updateMediaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) : Promise<DeleteResult> {
    return this.mediaService.remove(id);
  }
}
