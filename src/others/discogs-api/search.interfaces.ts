export interface DiscogsAlbumSearchResponse {
  pagination: DiscogsPagination;
  results: DiscogsResult[];
}

export interface DiscogsPagination {
  page: number;
  pages: number;
  per_page: number;
  items: number;
  urls: DiscogsUrls;
}

export interface DiscogsUrls {
  last: string;
  next: string;
}

export interface DiscogsResult {
  country: string;
  year?: string;
  format: string[];
  label: string[];
  type: string;
  genre: string[];
  style: string[];
  id: number;
  barcode: string[];
  master_id: number;
  master_url?: string;
  uri: string;
  catno: string;
  title: string;
  thumb: string;
  cover_image: string;
  resource_url: string;
  community: DiscogsCommunity;
  format_quantity?: number;
  formats?: DiscogsFormat[];
}

export interface DiscogsCommunity {
  want: number;
  have: number;
}

export interface DiscogsFormat {
  name: string;
  qty: string;
  descriptions: string[];
  text?: string;
}
