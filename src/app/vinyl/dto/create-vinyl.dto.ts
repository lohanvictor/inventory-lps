export interface ICreateVinylDto {
  externalId: string;
  name: string;
  cover: string;
  year: number;
  artists: {
    name: string;
    externalId: string;
  }[];
}

export class CreateVinylDto implements ICreateVinylDto {
  name: string;
  cover: string;
  year: number;
  artists: { name: string; externalId: string }[];
  externalId: string;
}
