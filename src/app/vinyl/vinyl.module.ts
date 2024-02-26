import { Module } from '@nestjs/common';
import { VinylService } from './vinyl.service';
import { VinylController } from './vinyl.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vinyl, VinylSchema } from './schemas/vinyl.entity';

@Module({
  controllers: [VinylController],
  providers: [VinylService],
  imports: [
    MongooseModule.forFeature([{ name: Vinyl.name, schema: VinylSchema }]),
  ],
})
export class VinylModule {}
