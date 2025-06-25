import { Controller, Get, Query } from "@nestjs/common";

@Controller('tracks')
export class TracksController {
  @Get('analysis-report')
  async getAnalysisReport() {
    return {
      trackCompletionRate: 60,
      trackClassCompletionProbabilityList: [
        {
          trackClass: {
            name: '인공지능'
          },
          completionProbability: 50,
        }
      ]
    }
  }
}
