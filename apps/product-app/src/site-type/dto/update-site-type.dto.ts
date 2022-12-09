import { PartialType } from '@nestjs/swagger';
import { CreateSiteTypeDto } from './create-site-type.dto';

export class UpdateSiteTypeDto extends PartialType(CreateSiteTypeDto) {}
