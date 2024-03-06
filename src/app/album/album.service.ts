import { Injectable } from '@nestjs/common';
import { FindAlbumRequest, FindAlbumResponse } from './dto/album.dto';
import { ExternalApi } from 'src/others/external-api';

@Injectable()
export class AlbumService {
  async find(request: FindAlbumRequest): Promise<FindAlbumResponse[]> {
    const response = await ExternalApi.searchAlbum(request);
    return response;
  }
}
