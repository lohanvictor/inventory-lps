import {
  FindAlbumRequest,
  FindAlbumResponse,
} from 'src/app/album/dto/album.dto';
import { CreateVinylDto } from 'src/app/vinyl/dto/create-vinyl.dto';
import { DiscogsApi } from './discogs-api';
import { DiscogsUtils } from './discogs-api/utils';

export class ExternalApi {
  /**
   * Searches for albums based on the provided search criteria.
   * @param body - The search criteria for finding albums.
   * @returns A promise that resolves to an array of FindAlbumResponse objects.
   */
  static async searchAlbum(
    body: FindAlbumRequest,
  ): Promise<FindAlbumResponse[]> {
    const externalApiResponse = await DiscogsApi.searchAlbums(
      body.name,
      body.pageSize,
      body.page,
    );
    const parsedResponse = externalApiResponse.map(DiscogsUtils.parseToAlbum);
    return parsedResponse;
  }

  /**
   * Processes the album to save it in the database. Each external has
   * a different structure, so this method is responsible for processing
   * the album to save it in the database.
   * @param body - The album to be saved.
   * @returns A promise that resolves to the album to be saved.
   */
  static async processAlbumToSave(
    body: CreateVinylDto,
  ): Promise<CreateVinylDto> {
    const externalApiResponse = await DiscogsApi.getAlbumByURL(body.externalId);
    const createVinyl = new CreateVinylDto();
    createVinyl.cover = externalApiResponse.images[0].uri;
    createVinyl.externalId = externalApiResponse.id.toString();
    createVinyl.name = externalApiResponse.title;
    createVinyl.year = externalApiResponse.year;
    createVinyl.artists = externalApiResponse.artists.map((artirt) => ({
      externalId: artirt.id.toString(),
      name: artirt.name,
    }));
    createVinyl.tracks = externalApiResponse.tracklist.map(
      ({ position, title }) => ({
        name: title,
        position: position.substring(1),
        side: position.at(0),
      }),
    );
    return createVinyl;
  }
}
