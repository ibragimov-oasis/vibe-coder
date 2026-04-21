import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { createMock } from '@golevelup/ts-jest';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../common/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { MiscService } from '../misc/misc.service';
import { ProviderService } from '../provider/provider.service';

describe('AuthService', () => {
  let service: AuthService;

  const prismaService = createMock<PrismaService>();
  const jwtService = createMock<JwtService>();
  const miscService = createMock<MiscService>();
  const providerService = createMock<ProviderService>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              switch (key) {
                case 'email.resendApiKey':
                  return 're_123';
                default:
                  return null;
              }
            }),
          },
        },
        { provide: PrismaService, useValue: prismaService },
        { provide: JwtService, useValue: jwtService },
        { provide: MiscService, useValue: miscService },
        { provide: ProviderService, useValue: providerService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
