import { Test, TestingModule } from '@nestjs/testing';
import { KnowledgeController } from './knowledge.controller';
import { DocumentService } from './document.service';
import { ResourceService } from './resource.service';
import { createMock } from '@golevelup/ts-jest';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

describe('KnowledgeController', () => {
  let controller: KnowledgeController;

  const documentService = createMock<DocumentService>();
  const resourceService = createMock<ResourceService>();
  const configService = createMock<ConfigService>();
  const jwtService = createMock<JwtService>();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KnowledgeController],
      providers: [
        { provide: DocumentService, useValue: documentService },
        { provide: ResourceService, useValue: resourceService },
        { provide: ConfigService, useValue: configService },
        { provide: JwtService, useValue: jwtService },
      ],
    }).compile();

    controller = module.get<KnowledgeController>(KnowledgeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
