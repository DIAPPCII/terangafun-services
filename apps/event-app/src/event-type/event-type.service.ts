import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateEventTypeDto } from './dto/create-event-type.dto';
import { UpdateEventTypeDto } from './dto/update-event-type.dto';
import { EventType } from './entities/event-type.entity';

@Injectable()
export class EventTypeService {

  constructor(
    @InjectRepository(EventType)
    private eventTypeRepository: Repository<EventType>,
  ) {}


  async create(createEventTypeDto: CreateEventTypeDto) : Promise<EventType> {
    const  date = new Date();
    const newEventType = {
      createdAt: date,
      updatedAt: date,
      ...createEventTypeDto,
    }

    return this.eventTypeRepository.save(newEventType);
  }

  async findAll(): Promise<EventType[]> {
    return this.eventTypeRepository.find();
  }

  async findOne(id: string) {
    return  this.eventTypeRepository.findOneBy(
      {
        id,
      },
    
    );
  }

  async update(id: string, updateEventTypeDto: UpdateEventTypeDto) : Promise<EventType> {
    if(await this.findOne(id)){
    
      const updatedEvent = {
        updatedAt: new Date(),
        id : id,
        ...updateEventTypeDto,
      }
      return this.eventTypeRepository.save(updatedEvent);
    }else{
      throw new Error('Event type with id ' + id + ' not found');
    }
  }

  async remove(id: string): Promise<DeleteResult> {
    if(await this.findOne(id)){
      return this.eventTypeRepository.delete(id);
    }else{
      throw new Error('Event type with id ' + id + ' not found');
    }
  }
}
