import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MetaPhotoModule } from './meta-photo/meta-photo.module';

@Module({
  imports: [MetaPhotoModule],
  controllers: [AppController],
})
export class AppModule {}
