import { Injectable, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OAuthError } from '@refly/errors';

@Injectable()
export class GoogleOauthGuard extends AuthGuard('google') {
  private readonly logger = new Logger(GoogleOauthGuard.name);

  handleRequest(err: any, user: any) {
    if (err || !user) {
      this.logger.error(
        `Google OAuth guard error: ${JSON.stringify(err)}, user: ${JSON.stringify(user)}`,
      );
      throw new OAuthError(); // This will be properly handled by global exception filter
    }
    return user;
  }
}
