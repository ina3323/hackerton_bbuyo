export class AnalyzeRequestDto {
  completedSubjects: string[];
  remainingSemesters: number;
  maxCreditsPerSemester: number;
  totalCreditsToTake: number;
  userAvgGrade: number;
  referenceGrade: number;
  courseAvgScore: number;
  globalAvgScore: number;
}