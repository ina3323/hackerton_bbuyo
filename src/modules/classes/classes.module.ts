
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClassesController } from "./classes.controller";
import { Class } from "./classes.entity";
import { ClassesRepository } from "./classes.repository";
import { ClassesService } from "./classes.service";

@Module({
  imports: [TypeOrmModule.forFeature([Class])],
  providers: [ClassesRepository, ClassesService],
  controllers: [ClassesController]
})
export class ClassesModule { }
