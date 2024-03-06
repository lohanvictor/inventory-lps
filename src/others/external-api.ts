import {
  FindAlbumRequest,
  FindAlbumResponse,
} from 'src/app/album/dto/album.dto';
import { SpotifyApi } from './spotify-api';
import { SpotifyUtils } from './spotify-api/utils';

export class ExternalApi {
  static async searchAlbum(
    body: FindAlbumRequest,
  ): Promise<FindAlbumResponse[]> {
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
