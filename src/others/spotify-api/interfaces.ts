export interface SpotifyAlbumImage {
  url: string;
}

export interface SpotifyAlbumArtist {
  external_urls: {
    spotify: string;
  };
  id: string;
  name: string;
}

export interface SpotifyAlbumResponse {
  albums: {
    items: SpotifyAlbumAPI[];
  };
}

export interface SpotifyAlbumAPI {
  album_type: string;
  type: string;
  id: string;
  href: string;
  images: SpotifyAlbumImage[];
  name: string;
  release_date: string;
  artists: SpotifyAlbumArtist[];
}
