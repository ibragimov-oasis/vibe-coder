import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { CopilotService } from './copilot.service';
import { CopilotController } from './copilot.controller';
import { ActionModule } from '../action/action.module';

@Module({
  imports: [CommonModule, ActionModule],
  controllers: [CopilotController],
  providers: [CopilotService],
  exports: [CopilotService],
})
export class CopilotModule {}
