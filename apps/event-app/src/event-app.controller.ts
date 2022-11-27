import { EventAppService } from './event-app.service';

import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Controller('event')
export class EventAppController {
  constructor(private readonly eventService: EventAppService,) {}

  @Post()
  async create(@Body() createEventDto: CreateEventDto) : Promise<Event> {
    return this.eventService.create(createEventDto);
  }

  @Get()
  async findAll() : Promise<Event[]> {
    return this.eventService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) : Promise<Event> {
    return this.eventService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) : Promise<Event> {
    return this.eventService.update(id, updateEventDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) : Promise<DeleteResult> {
    return this.eventService.remove(id);
  }
}
