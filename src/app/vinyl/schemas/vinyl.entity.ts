import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type VinylDocument = HydratedDocument<Vinyl>;

interface Artist {
  name: string;
  externalId: string;
}
interface Track {
  side: string;
  name: string;
  position: string;
}
@Schema()
export class Vinyl {
  @Prop()
  externalId: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  cover: string;

  @Prop()
  year: number;

  @Prop()
  artists: Artist[];

  @Prop()
  tracks: Track[];
}

export const VinylSchema = SchemaFactory.createForClass(Vinyl);
