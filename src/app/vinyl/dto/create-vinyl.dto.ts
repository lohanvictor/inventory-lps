export interface ICreateVinylDto {
  externalId: string;
  name: string;
  cover: string;
  year: number;
  artists: {
    name: string;
    externalId: string;
  }[];
  tracks: Array<{
    side: string;
    name: string;
    position: string;
  }>;
}

export class CreateVinylDto implements ICreateVinylDto {
  tracks: { side: string; name: string; position: string }[];
  name: string;
  cover: string;
  year: number;
  artists: { name: string; externalId: string }[];
  externalId: string;
}
