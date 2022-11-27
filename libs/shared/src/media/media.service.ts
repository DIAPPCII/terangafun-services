import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { MediaDto, UpdateMediaDto } from './dto/media.dto';
import { Media } from './entities/media.entity';

@Injectable()
export class MediaService {

  constructor(
    @InjectRepository(Media)
    private mediaRepository: Repository<Media>,
  ) {}


  async create(createMediaDto: MediaDto) : Promise<Media> {
    const  date = new Date();
    const newMedia = {
      createdAt: date,
      updatedAt: date,
      ...createMediaDto,
    }

    return this.mediaRepository.save(newMedia);
  }

  async findAll(): Promise<Media[]> {
    return this.mediaRepository.find();
  }

  async findOne(id: string) {
    return  this.mediaRepository.findOneBy(
      {
        id,
      },
    
    );
  }

  async update(id: string, updateMediaDto: UpdateMediaDto) : Promise<Media> {
    if(await this.findOne(id)){
    
      const updatedEvent = {
        updatedAt: new Date(),
        id : id,
        ...updateMediaDto,
      }
      return this.mediaRepository.save(updatedEvent);
    }else{
      throw new Error('Event type with id ' + id + ' not found');
    }
  }

  async remove(id: string): Promise<DeleteResult> {
    if(await this.findOne(id)){
      return this.mediaRepository.delete(id);
    }else{
      throw new Error('Event type with id ' + id + ' not found');
    }
  }
}
