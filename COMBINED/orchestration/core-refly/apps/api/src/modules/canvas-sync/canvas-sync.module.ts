import { Module } from '@nestjs/common';
import { CanvasSyncService } from './canvas-sync.service';
import { CommonModule } from '../common/common.module';

@Module({
  imports: [CommonModule],
  providers: [CanvasSyncService],
  exports: [CanvasSyncService],
})
export class CanvasSyncModule {}
