import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeepPartial, EntityManager, Repository } from "typeorm";
import { Student } from "./students.entity";

@Injectable()
export class StudentsRepository {
  constructor(@InjectRepository(Student) private readonly repository: Repository<Student>) { }

  createInstance(student: DeepPartial<Student>): Student {
    return this.repository.create(student);
  }

  async addStudent(student: Student, manager?: EntityManager): Promise<Student> {
    if (manager) {
      return manager.save(Student, student);
    } else {
      return this.repository.save(student);
    }
  }
}
