import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { TagDto, UpdateTagDto } from './dto/tag.dto';
import { Tag } from './entities/tag.entity';

@Injectable()
export class TagService {

  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}


  async create(createTagDto: TagDto) : Promise<Tag> {
    const  date = new Date();
    const newTag = {
      createdAt: date,
      updatedAt: date,
      ...createTagDto,
    }

    return this.tagRepository.save(newTag);
  }

  async findAll(): Promise<Tag[]> {
    return this.tagRepository.find();
  }

  async findOne(id: string) {
    return  this.tagRepository.findOneBy(
      {
        id,
      },
    
    );
  }

  async update(id: string, updateTagDto: UpdateTagDto) : Promise<Tag> {
    if(await this.findOne(id)){
    
      const updatedEvent = {
        updatedAt: new Date(),
        id : id,
        ...updateTagDto,
      }
      return this.tagRepository.save(updatedEvent);
    }else{
      throw new Error('Event type with id ' + id + ' not found');
    }
  }

  async remove(id: string): Promise<DeleteResult> {
    if(await this.findOne(id)){
      return this.tagRepository.delete(id);
    }else{
      throw new Error('Event type with id ' + id + ' not found');
    }
  }
}
