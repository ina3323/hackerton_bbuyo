import { Body, Controller, Param, Post } from "@nestjs/common";
import { ClassesService } from "./classes.service";

@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) { }


}
