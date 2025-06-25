import { Injectable } from "@nestjs/common";
import { ClassesRepository } from "./classes.repository";

@Injectable()
export class ClassesService {
  constructor(private readonly classesRepository: ClassesRepository) { }
}
