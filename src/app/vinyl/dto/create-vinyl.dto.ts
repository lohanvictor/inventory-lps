export interface ICreateVinylDto {
  externalApiId: string;
  name: string;
  cover: string;
  year: number;
  artist: {
    name: string;
    externalApiId: string;
  }[];
}

export class CreateVinylDto implements ICreateVinylDto {
  name: string;
  cover: string;
  year: number;
  artist: { name: string; externalApiId: string }[];
  externalApiId: string;
}
