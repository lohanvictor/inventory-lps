import { FindAlbumResponse } from 'src/app/album/dto/album.dto';
import { SpotifyAlbumAPI } from './interfaces';

export class SpotifyUtils {
  static parseToAlbum(externalObject: SpotifyAlbumAPI): FindAlbumResponse {
    const releaseYear = new Date(externalObject.release_date).getFullYear();
    const result: FindAlbumResponse = {
      artists: externalObject.artists.map((a) => ({
        externalId: a.id,
        name: a.name,
      })),
      cover: externalObject.images[0].url,
      externalId: externalObject.id,
      name: externalObject.name,
      year: releaseYear,
    };
    return result;
  }
}
