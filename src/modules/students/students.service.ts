import { Injectable } from "@nestjs/common";
import { SignupRequestBodyDto } from "./dtos/signup-request.dto";
import { StudentsRepository } from "./students.repository";

@Injectable()
export class StudentsService {
  constructor(private readonly studentsRepository: StudentsRepository) { }

  async signup(body: SignupRequestBodyDto) {
    const { name, studentNumber } = body;

    const studentInstance = this.studentsRepository.createInstance({
      name,
      studentNumber
    });

    await this.studentsRepository.addStudent(studentInstance);
  }
}
