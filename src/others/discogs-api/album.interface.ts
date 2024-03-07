export interface DiscogsAlbumResponse {
  id: number;
  main_release: number;
  most_recent_release: number;
  resource_url: string;
  uri: string;
  versions_url: string;
  main_release_url: string;
  most_recent_release_url: string;
  num_for_sale: number;
  lowest_price: number;
  images: DiscogsImage[];
  genres: string[];
  styles: string[];
  year: number;
  tracklist: DiscogsTracklist[];
  artists: DiscogsArtist[];
  title: string;
  data_quality: string;
  videos: DiscogsVideo[];
}

export interface DiscogsImage {
  type: string;
  uri: string;
  resource_url: string;
  uri150: string;
  width: number;
  height: number;
}

export interface DiscogsTracklist {
  position: string;
  type_: string;
  title: string;
  duration: string;
}

export interface DiscogsArtist {
  name: string;
  anv: string;
  join: string;
  role: string;
  tracks: string;
  id: number;
  resource_url: string;
}

export interface DiscogsVideo {
  uri: string;
  title: string;
  description: string;
  duration: number;
  embed: boolean;
}
