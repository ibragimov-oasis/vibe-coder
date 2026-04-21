import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-twitter';
import { Request } from 'express';
import { AuthService } from '../auth.service';

// Extend session type to include uid
declare module 'express-session' {
  interface SessionData {
    uid?: string;
  }
}

@Injectable()
export class TwitterOauthStrategy extends PassportStrategy(Strategy, 'twitter') {
  constructor(
    private configService: ConfigService,
    private authService: AuthService,
  ) {
    super({
      consumerKey: configService.get('auth.twitter.clientId'),
      consumerSecret: configService.get('auth.twitter.clientSecret'),
      callbackURL: configService.get('auth.twitter.callbackUrl'),
      passReqToCallback: true,
    });
  }

  async validate(req: Request, accessToken: string, refreshToken: string, profile: Profile) {
    // OAuth1a doesn't support scopes - permissions are set in Twitter Developer Portal
    // Extract scope from query parameters
    const scope = req?.query?.scope as string;
    const scopes = scope ? scope.split(' ') : [];

    // Extract uid from session (stored during initial OAuth request)
    let uid: string | undefined;
    if (req.session?.uid) {
      uid = req.session.uid;
      // Clean up session after use
      req.session.uid = undefined;
    }

    return this.authService.oauthValidate(accessToken, refreshToken, profile, scopes, uid);
  }
}
