import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoConfig } from './config/db/mongo';
import { VinylModule } from './app/vinyl/vinyl.module';
import { AlbumModule } from './app/album/album.module';

@Module({
  imports: [MongoConfig.init(), VinylModule, AlbumModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
