import { Module } from '@nestjs/common';
import { MetaPhotoService } from './meta-photo.service';
import { MetaPhotoController } from './meta-photo.controller';
import { GetDataService } from './api-consumer/external-api';

@Module({
  controllers: [MetaPhotoController],
  providers: [MetaPhotoService, GetDataService],
  imports: [],
})
export class MetaPhotoModule {}
