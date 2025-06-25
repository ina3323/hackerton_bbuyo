import { Controller, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { AnalyzeRequestDto } from './dto/analyze-request.dto';
import { AnalyzeResponseDto } from './dto/analyze-response.dto';

@Controller('analyzing')
export class AnalyzingController {
  @Post()
  @ApiOperation({ summary: '분석 결과를 조회합니다.' })
  @ApiOkResponse({ type: AnalyzeResponseDto })
  async analyze(@Body() dto: AnalyzeRequestDto): Promise<AnalyzeResponseDto> {
    const {
      completedSubjects,
      remainingSemesters,
      maxCreditsPerSemester,
      totalCreditsToTake,
      userAvgGrade,
      referenceGrade,
      courseAvgScore,
      globalAvgScore
    } = dto;

    const TOTAL_REQUIRED_SUBJECTS = 6;

    // 1. 트랙 이수율
    const completionRate = parseFloat(
      (((TOTAL_REQUIRED_SUBJECTS - completedSubjects.length) / TOTAL_REQUIRED_SUBJECTS) * 100).toFixed(2)
    );

    // 2. 이수 가능성 계산
    const basicRate = completedSubjects.length / TOTAL_REQUIRED_SUBJECTS;
    const academicFactor = userAvgGrade / referenceGrade;
    const timeFactor = totalCreditsToTake / (remainingSemesters * maxCreditsPerSemester);
    const difficultyFactor = globalAvgScore / courseAvgScore;

    const completionPossibility = parseFloat(
      (basicRate * academicFactor * timeFactor * difficultyFactor).toFixed(3)
    );

    // 3. 추천 강좌 예시 (하드코딩)
    const recommendedCourses = [
      { course: '딥러닝 기초', credits: 3, possibility: 0.91 },
      { course: '강화학습', credits: 3, possibility: 0.84 },
      { course: 'AI 윤리와 법', credits: 2, possibility: 0.79 }
    ];

    return {
      completionRate,
      completionPossibility,
      factors: {
        basicRate: parseFloat(basicRate.toFixed(3)),
        academicFactor: parseFloat(academicFactor.toFixed(3)),
        timeFactor: parseFloat(timeFactor.toFixed(3)),
        difficultyFactor: parseFloat(difficultyFactor.toFixed(3)),
      },
      recommendedCourses
    };
  }
}
