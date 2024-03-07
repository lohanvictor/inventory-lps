import axios from 'axios';
import { DiscogsAlbumSearchResponse, DiscogsResult } from './search.interfaces';
import { DiscogsAlbumResponse } from './album.interface';

const discogsApi = axios.create({
  baseURL: 'https://api.discogs.com',
});

export class DiscogsApi {
  static credentials = { key: '', secret: '' };

  static async updateToken() {
    const key = process.env.DISCOGS_CLIENT_KEY || 'discogs_client_key';
    const secret = process.env.DISCOGS_CLIENT_SECRET || 'discogs_client_secret';

    this.credentials = { key, secret };
  }

  static hasCredentials() {
    return this.credentials.key && this.credentials.secret;
  }

  static async searchAlbums(
    albumName: string,
    per_page = 10,
    page = 1,
  ): Promise<DiscogsResult[]> {
    if (!this.hasCredentials()) {
      this.updateToken();
    }

    const params = { q: albumName, per_page, page, ...this.credentials };
    const response = await discogsApi.get<DiscogsAlbumSearchResponse>(
      '/database/search',
      { params },
    );
    return response.data.results;
  }

  static async getAlbumByURL(endpoint: string): Promise<DiscogsAlbumResponse> {
    const params = { ...this.credentials };
    const response = await discogsApi.get<DiscogsAlbumResponse>(endpoint, {
      params,
    });
    return response.data;
  }
}
