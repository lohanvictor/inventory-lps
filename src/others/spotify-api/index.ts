import axios from 'axios';
import { SpotifyAlbumAPI, SpotifyAlbumResponse } from './interfaces';
interface TokenResponse {
  access_token: string;
  token_type: string;
}

const spotifyApi = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

function setToken(token: string) {
  spotifyApi.defaults.headers.common.Authorization = 'Bearer ' + token;
}

export class SpotifyApi {
  static token: string = '';

  static async updateToken(): Promise<void> {
    const client_id = process.env.SPOTIFY_CLIENT_ID || 'spotify_client_id';
    const client_secret =
      process.env.SPOTIFY_CLIENT_SECRET || 'spotify_client_secret';
    const grant_type = 'client_credentials';

    const body = new URLSearchParams();
    body.append('client_id', client_id);
    body.append('client_secret', client_secret);
    body.append('grant_type', grant_type);

    const response = await axios.post<TokenResponse>(
      'https://accounts.spotify.com/api/token',
      body,
    );

    this.token = response.data.access_token;
    setToken(this.token);
  }

  static async searchAlbums(
    albumName: string,
    offset = 0,
    limit = 10,
  ): Promise<SpotifyAlbumAPI[]> {
    const type = 'album';
    async function request() {
      try {
        const params = { q: albumName, type, offset, limit };
        const response = await spotifyApi.get<SpotifyAlbumResponse>('/search', {
          params,
        });
        return response;
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.response.status === 401) {
            await SpotifyApi.updateToken();
            return request();
          }
        }
      }
    }
    const response = await request();
    return response.data.albums.items;
  }
}
