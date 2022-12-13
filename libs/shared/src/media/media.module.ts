import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Media } from './entities/media.entity';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';

@Module({
  imports: [TypeOrmModule.forFeature([Media])],
  providers: [
    MediaService,
  ],
  controllers: [MediaController],
  exports: [TypeOrmModule],
})
export class MediaModule {}