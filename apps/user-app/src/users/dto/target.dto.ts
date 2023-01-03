import { IsNotEmpty } from "class-validator";

export class TargetDto {
  @IsNotEmpty()
  targetId: string;
}
