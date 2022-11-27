import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';

@Injectable()
export class EventAppService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}


  async create(createEventDto: CreateEventDto) : Promise<Event> {
    const  date = new Date();
    const newEvent = {
      createdAt: date,
      updatedAt: date,
      ...createEventDto,
    }

    return this.eventRepository.save(newEvent);
  }

  async findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  async findOne(id: string) {
    return  this.eventRepository.findOneBy(
      {
        id,
      },
    
    );
  }

  async update(id: string, updateEventDto: UpdateEventDto) : Promise<Event> {
    if(await this.findOne(id)){
    
      const updatedEvent = {
        updatedAt: new Date(),
        id : id,
        ...updateEventDto,
      }
      return this.eventRepository.save(updatedEvent);
    }else{
      throw new Error('Event  with id ' + id + ' not found');
    }
  }

  async remove(id: string): Promise<DeleteResult> {
    if(await this.findOne(id)){
      return this.eventRepository.delete(id);
    }else{
      throw new Error('Event  with id ' + id + ' not found');
    }
  }

}
