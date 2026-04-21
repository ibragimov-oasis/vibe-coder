import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { StepService } from './step.service';

@Module({
  imports: [CommonModule],
  providers: [StepService],
  exports: [StepService],
})
export class StepModule {}
