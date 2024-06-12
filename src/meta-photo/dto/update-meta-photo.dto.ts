import { PartialType } from '@nestjs/swagger';
import { CreateMetaPhotoDto } from './create-meta-photo.dto';

export class UpdateMetaPhotoDto extends PartialType(CreateMetaPhotoDto) {}
