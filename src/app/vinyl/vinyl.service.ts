import { Injectable } from '@nestjs/common';
import { CreateVinylDto } from './dto/create-vinyl.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Vinyl } from './schemas/vinyl.entity';
import { Model } from 'mongoose';
import { ExternalApi } from 'src/others/external-api';

@Injectable()
export class VinylService {
  constructor(@InjectModel(Vinyl.name) private vinylModel: Model<Vinyl>) {}

  async create(createVinylDto: CreateVinylDto): Promise<Vinyl> {
    const processedVinyl = await ExternalApi.processAlbumToSave(createVinylDto);
    const createdVinyl = await this.vinylModel.create(processedVinyl);
    return createdVinyl;
  }

  async findAll() {
    const allVinyls = await this.vinylModel.find().exec();
    return allVinyls;
  }

  async remove(externalId: string) {
    await this.vinylModel.deleteOne({ externalId });
  }
}
