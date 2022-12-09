import { PartialType } from '@nestjs/swagger';
import { CreateHeadingDto } from './create-heading.dto';

export class UpdateHeadingDto extends PartialType(CreateHeadingDto) {}
