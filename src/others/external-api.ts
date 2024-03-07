import {
  FindAlbumRequest,
  FindAlbumResponse,
} from 'src/app/album/dto/album.dto';
import { CreateVinylDto } from 'src/app/vinyl/dto/create-vinyl.dto';
import { DiscogsApi } from './discogs-api';
import { DiscogsUtils } from './discogs-api/utils';

export class ExternalApi {
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
    return createVinyl;
  }
}
