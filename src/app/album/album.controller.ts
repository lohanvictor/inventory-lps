import { Controller, Get, Query } from '@nestjs/common';
import { AlbumService } from './album.service';
import { FindAlbumRequest } from './dto/album.dto';

@Controller('albums')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Get('/filter')
  findOne(@Query() body: FindAlbumRequest) {
    return this.albumService.find(body);
  }
}
