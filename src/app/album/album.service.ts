import { Injectable } from '@nestjs/common';
import { FindAlbumRequest, FindAlbumResponse } from './dto/album.dto';
import { SpotifyApi } from 'src/others/spotify-api';
import { SpotifyUtils } from 'src/others/spotify-api/utils';

@Injectable()
export class AlbumService {
  async find(body: FindAlbumRequest): Promise<FindAlbumResponse[]> {
    const offset = (body.page - 1) * body.pageSize;
    const externalApiResponse = await SpotifyApi.searchAlbums(
      body.name,
      offset,
      body.pageSize,
    );
    const parsedResponse = externalApiResponse.map(SpotifyUtils.parseToAlbum);
    return parsedResponse;
  }
}
