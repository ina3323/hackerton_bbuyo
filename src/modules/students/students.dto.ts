import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AddGradeHistoryParam {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  studentName: string;
}
