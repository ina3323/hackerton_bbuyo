import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class AddGradeHistoryRequestDto {
  @ApiProperty()
  classGrades: ClassGrade[];
}

export class ClassGrade {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  grade: string;
}
