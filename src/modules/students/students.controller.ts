import { Body, Controller, Param, Post } from "@nestjs/common";
import { AddGradeHistoryRequestDto } from "./dtos/add-grade-history-request.dto";
import { SignupRequestBodyDto } from "./dtos/signup-request.dto";
import { AddGradeHistoryParam } from "./students.dto";
import { StudentsService } from "./students.service";

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) { }

  @Post('signup')
  async signup(@Body() body: SignupRequestBodyDto) {
    await this.studentsService.signup(body);
  }

  @Post(':studentName/grade-history')
  async addGradeHistory(@Param() param: AddGradeHistoryParam, @Body() body: AddGradeHistoryRequestDto) {
    // 학생 조회
    // GradeHistory 삽입
    console.log(param);
  }
}
