import { Module } from '@nestjs/common';
import { CodeArtifactController } from './code-artifact.controller';
import { CodeArtifactService } from './code-artifact.service';
import { CommonModule } from '../common/common.module';
import { CanvasSyncModule } from '../canvas-sync/canvas-sync.module';

@Module({
  imports: [CommonModule, CanvasSyncModule],
  controllers: [CodeArtifactController],
  providers: [CodeArtifactService],
  exports: [CodeArtifactService],
})
export class CodeArtifactModule {}
