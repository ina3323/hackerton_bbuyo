import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Class } from "./classes.entity";

@Injectable()
export class ClassesRepository {
  constructor(@InjectRepository(Class) private readonly repository: Repository<Class>) { }
}
