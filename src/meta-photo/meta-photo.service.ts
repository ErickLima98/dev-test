import { Injectable } from '@nestjs/common';
import { CreateMetaPhotoDto } from './dto/create-meta-photo.dto';
import { UpdateMetaPhotoDto } from './dto/update-meta-photo.dto';
import { GetDataService } from './api-consumer/external-api';

@Injectable()
export class MetaPhotoService {
  constructor(
    private readonly externalApi: GetDataService
  ){}

  async getPhotoDetails(id: string) {
    return await this.externalApi.getPhotoDetails(id)
  }

  async getPhotos(query: any) {
    return await this.externalApi.getFilteredPhotos(query) 
  }

}
