import { Injectable } from '@nestjs/common';
import { CreateVinylDto } from './dto/create-vinyl.dto';
// import { UpdateVinylDto } from './dto/update-vinyl.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Vinyl } from './schemas/vinyl.entity';
import { Model } from 'mongoose';

@Injectable()
export class VinylService {
  constructor(@InjectModel(Vinyl.name) private vinylModel: Model<Vinyl>) {}

  async create(createVinylDto: CreateVinylDto): Promise<Vinyl> {
    const createdVinyl = await this.vinylModel.create(createVinylDto);
    return createdVinyl;
  }

  async findAll() {
    const allVinyls = await this.vinylModel.find().exec();
    return allVinyls;
  }

  async remove(externalId: string) {
    await this.vinylModel.deleteOne({ externalId });
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} vinyl`;
  // }

  // update(id: number, updateVinylDto: UpdateVinylDto) {
  //   return `This action updates a #${id} vinyl`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} vinyl`;
  // }
}
