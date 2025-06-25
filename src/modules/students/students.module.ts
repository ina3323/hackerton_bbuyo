import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentsController } from "./students.controller";
import { Student } from "./students.entity";
import { StudentsRepository } from "./students.repository";
import { StudentsService } from "./students.service";

@Module({
  imports: [TypeOrmModule.forFeature([Student])],
  providers: [StudentsRepository, StudentsService],
  controllers: [StudentsController]
})
export class StudentsModule { }
