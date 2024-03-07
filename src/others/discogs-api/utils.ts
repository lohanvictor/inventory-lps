import { FindAlbumResponse } from 'src/app/album/dto/album.dto';
import { DiscogsResult } from './search.interfaces';

export class DiscogsUtils {
  static parseToAlbum(externalObject: DiscogsResult): FindAlbumResponse {
    return {
      artists: [],
      cover: externalObject.cover_image,
      externalId: externalObject.resource_url,
      name: externalObject.title,
      year: +externalObject.year,
    };
  }
}
