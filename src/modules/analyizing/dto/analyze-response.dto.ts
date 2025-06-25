import { ApiProperty } from "@nestjs/swagger";

export class Factor {
  @ApiProperty()
  basicRate: number;
  @ApiProperty()
  academicFactor: number;
  @ApiProperty()
  timeFactor: number;
  @ApiProperty()
  difficultyFactor: number;
}

export class RecommendedCourse {
  @ApiProperty()
  course: string;
  @ApiProperty()
  credits: number;
  @ApiProperty()
  possibility: number;
}

export class AnalyzeResponseDto {
  @ApiProperty()
  completionRate: number;

  @ApiProperty()
  completionPossibility: number;

  @ApiProperty({ type: Factor })
  factors: Factor;

  @ApiProperty({ isArray: true })
  recommendedCourses: RecommendedCourse[];
}


