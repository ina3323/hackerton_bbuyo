import { Body, Controller, Post } from "@nestjs/common";
import { SignupRequestBodyDto } from "./dtos/signup-request.dto";
import { StudentsService } from "./students.service";

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) { }

  @Post('signup')
  async signup(@Body() body: SignupRequestBodyDto) {
    await this.studentsService.signup(body);
  }
}
