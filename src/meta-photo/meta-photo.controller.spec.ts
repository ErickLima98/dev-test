import { Test, TestingModule } from '@nestjs/testing';
import { MetaPhotoController } from './meta-photo.controller';
import { MetaPhotoService } from './meta-photo.service';

describe('MetaPhotoController', () => {
  let controller: MetaPhotoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetaPhotoController],
      providers: [MetaPhotoService],
    }).compile();

    controller = module.get<MetaPhotoController>(MetaPhotoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
