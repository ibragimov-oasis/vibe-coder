import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import {
  User,
  ListCopilotSessionsResponse,
  GetCopilotSessionDetailResponse,
} from '@refly/openapi-schema';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { buildSuccessResponse } from '../../utils';
import { CopilotService } from './copilot.service';
import { LoginedUser } from '../../utils/decorators/user.decorator';
import { copilotSessionPO2DTO } from './copilot.dto';

@Controller('v1/copilot')
export class CopilotController {
  constructor(private copilotService: CopilotService) {}

  @UseGuards(JwtAuthGuard)
  @Get('session/list')
  async listCopilotSessions(
    @LoginedUser() user: User,
    @Query('canvasId') canvasId?: string,
  ): Promise<ListCopilotSessionsResponse> {
    const sessions = await this.copilotService.listCopilotSessions(user, { canvasId });
    return buildSuccessResponse(sessions.map(copilotSessionPO2DTO));
  }

  @UseGuards(JwtAuthGuard)
  @Get('session/detail')
  async getCopilotSessionDetail(
    @LoginedUser() user: User,
    @Query('sessionId') sessionId: string,
  ): Promise<GetCopilotSessionDetailResponse> {
    const session = await this.copilotService.getCopilotSessionDetail(user, { sessionId });
    return buildSuccessResponse(session ? copilotSessionPO2DTO(session) : null);
  }
}
