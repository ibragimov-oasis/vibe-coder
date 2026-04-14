import { Injectable, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OAuthError } from '@refly/errors';

@Injectable()
export class GithubOauthGuard extends AuthGuard('github') {
  private readonly logger = new Logger(GithubOauthGuard.name);

  handleRequest(err: any, user: any) {
    if (err || !user) {
      this.logger.error(
        `Github OAuth guard error: ${JSON.stringify(err)}, stack: ${err?.stack ?? 'unknown'}, user: ${JSON.stringify(user)}`,
      );
      throw new OAuthError(); // This will be properly handled by global exception filter
    }
    return user;
  }
}
