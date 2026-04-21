import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotificationService } from './notification.service';
import { CommonModule } from '../common/common.module';
import { MiscModule } from '../misc/misc.module';

@Module({
  imports: [CommonModule, ConfigModule, MiscModule],
  providers: [NotificationService],
  exports: [NotificationService],
})
export class NotificationModule {}
