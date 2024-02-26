export interface FindAlbumRequest {
  name: string;
  page: number;
  pageSize: number;
}

export interface FindAlbumResponse {
  externalId: string;
  name: string;
  year: number;
  cover: string;
  artists: {
    name: string;
    externalId: string;
  }[];
}

export interface ExternalAlbumApi<T> {
  parseToAlbum(externalObject: T): FindAlbumResponse;
}
