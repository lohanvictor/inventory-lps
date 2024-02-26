import { ICreateVinylDto } from './create-vinyl.dto';

interface IUpdateVinylDto extends Partial<ICreateVinylDto> {}

export class UpdateVinylDto implements IUpdateVinylDto {}
