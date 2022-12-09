import { Injectable } from '@nestjs/common';
import { CreateHeadingDto } from './dto/create-heading.dto';
import { UpdateHeadingDto } from './dto/update-heading.dto';

@Injectable()
export class HeadingService {
  create(createHeadingDto: CreateHeadingDto) {
    return 'This action adds a new heading';
  }

  findAll() {
    return `This action returns all heading`;
  }

  findOne(id: number) {
    return `This action returns a #${id} heading`;
  }

  update(id: number, updateHeadingDto: UpdateHeadingDto) {
    return `This action updates a #${id} heading`;
  }

  remove(id: number) {
    return `This action removes a #${id} heading`;
  }
}
