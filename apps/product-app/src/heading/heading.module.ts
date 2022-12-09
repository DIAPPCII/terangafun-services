import { Module } from '@nestjs/common';
import { HeadingService } from './heading.service';
import { HeadingController } from './heading.controller';

@Module({
  controllers: [HeadingController],
  providers: [HeadingService]
})
export class HeadingModule {}
