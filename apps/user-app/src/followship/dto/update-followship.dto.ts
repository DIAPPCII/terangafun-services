import { PartialType } from '@nestjs/swagger';
import { CreateFollowshipDto } from './create-followship.dto';

export class UpdateFollowshipDto extends PartialType(CreateFollowshipDto) {}
