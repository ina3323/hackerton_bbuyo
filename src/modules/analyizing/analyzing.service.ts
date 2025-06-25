// analyzing.service.ts
import { Injectable } from '@nestjs/common';
import { AnalyzeRequestDto } from './dto/analyze-request.dto';

@Injectable()
export class AnalyzingService {
  async analyzeReport(dto: AnalyzeRequestDto) {
    const {
      completedSubjects,// 트랙 내 이수한 강좌들
      remainingSemesters,// 남은 학기 수
      maxCreditsPerSemester, // 해당 학기 수강 가능 학점
      totalCreditsToTake, // 선택한 강좌들의 학점 수
      userAvgGrade, // 유저의 트랙 성적 평균 학점
      referenceGrade, // 기준 학점
      courseAvgScore, // 해당 과목 평균 점수
      globalAvgScore, // 전체 기준 평균 점수
    } = dto;

    const totalRequired = 6;

    const completionRate = ((totalRequired - completedSubjects.length) / totalRequired) * 100; // 이수율
    const academicFactor = userAvgGrade / referenceGrade; // 학업 성향 계수
    const timeFactor = totalCreditsToTake / (remainingSemesters * maxCreditsPerSemester); // 시간 가용성 계수
    const difficultyFactor = globalAvgScore / courseAvgScore; // 과목 난이도 보정 계수

    const possibility = parseFloat(
      (completionRate * academicFactor * timeFactor * difficultyFactor).toFixed(3),
    );

    return {
      completionRate: parseFloat(completionRate.toFixed(2)),
      completionPossibility: possibility,
      factors: {
        basicRate: completionRate.toFixed(3),
        academicFactor: academicFactor.toFixed(3),
        timeFactor: timeFactor.toFixed(3),
        difficultyFactor: difficultyFactor.toFixed(3),
      },
    };
  }
}
