import { EventTypeService } from './event-type.service';
import { CreateEventTypeDto } from './dto/create-event-type.dto';
import { UpdateEventTypeDto } from './dto/update-event-type.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { EventType } from './entities/event-type.entity';
import { DeleteResult } from 'typeorm';

@Controller('event-type')
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService,) {}

  @Post()
  async create(@Body() createEventTypeDto: CreateEventTypeDto) : Promise<EventType> {
    return this.eventTypeService.create(createEventTypeDto);
  }

  @Get()
  async findAll() : Promise<EventType[]> {
    return this.eventTypeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) : Promise<EventType> {
    return this.eventTypeService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEventTypeDto: UpdateEventTypeDto) : Promise<EventType> {
    return this.eventTypeService.update(id, updateEventTypeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) : Promise<DeleteResult> {
    return this.eventTypeService.remove(id);
  }
}
