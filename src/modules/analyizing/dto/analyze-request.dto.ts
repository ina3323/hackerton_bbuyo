import { ApiProperty } from "@nestjs/swagger";

export class AnalyzeRequestDto {
  @ApiProperty({ isArray: true })
  completedSubjects: string[];

  @ApiProperty()
  remainingSemesters: number;

  @ApiProperty()
  maxCreditsPerSemester: number;

  @ApiProperty()
  totalCreditsToTake: number;

  @ApiProperty()
  userAvgGrade: number;

  @ApiProperty()
  referenceGrade: number;

  @ApiProperty()
  courseAvgScore: number;

  @ApiProperty()
  globalAvgScore: number;
}
