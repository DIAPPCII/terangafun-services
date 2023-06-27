import { PartialType } from "@nestjs/swagger";
import { CreateDestinationTypeDto } from "./create-destination-type.dto";
import { IsNotEmpty } from "class-validator";

export class UpdateDestinationTypeDto extends PartialType(CreateDestinationTypeDto) {
  @IsNotEmpty({ message: "field [name] should not be empty or null" })
  name: string;
  description: string;
}
