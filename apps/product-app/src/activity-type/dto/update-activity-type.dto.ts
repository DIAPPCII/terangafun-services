import { PartialType } from "@nestjs/mapped-types";
import { CreateActivityTypeDto } from "./create-activity-type.dto";
import { IsNotEmpty } from "class-validator";

export class UpdateActivityTypeDto extends PartialType(CreateActivityTypeDto) {}
