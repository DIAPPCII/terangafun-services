import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'apps/event-app/src/entities/event.entity';
import { Tag } from './entities/tag.entity';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tag, Event])],
  providers: [
    TagService,
  ],
  controllers: [TagController],
  exports: [TypeOrmModule],
})
export class TagModule {}