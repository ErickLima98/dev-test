import { Test, TestingModule } from '@nestjs/testing';
import { MetaPhotoService } from './meta-photo.service';

describe('MetaPhotoService', () => {
  let service: MetaPhotoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetaPhotoService],
    }).compile();

    service = module.get<MetaPhotoService>(MetaPhotoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
