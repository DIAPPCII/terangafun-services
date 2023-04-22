import { PartialType } from "@nestjs/mapped-types";
import { CreateActivityDto } from "./create-activity.dto";
import { IsNotEmpty } from "class-validator";

export class UpdateActivityDto extends PartialType(CreateActivityDto) {}
