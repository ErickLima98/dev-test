import { Controller, Get, Param, Query } from '@nestjs/common';
import { MetaPhotoService } from './meta-photo.service';

@Controller('meta-photos')
export class MetaPhotoController {
  constructor(private readonly metaPhotoService: MetaPhotoService) {}

  @Get('photos/:id')
  getPhotoDetails(
    @Param('id') id: string
  ) {
    return this.metaPhotoService.getPhotoDetails(id);
  }

  @Get('photos')
  findOne(@Query() query: any) {
    return this.metaPhotoService.getPhotos(query);
  }

}
