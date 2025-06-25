import { Module } from '@nestjs/common';
import { AnalyzingController } from './analyzing.controller';
import { AnalyzingService } from './analyzing.service';

@Module({
  controllers: [AnalyzingController],
  providers: [AnalyzingService],

})
export class AnalyzingModule { }
