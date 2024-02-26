import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export interface Artist {
  name: string;
  externalApiId: string;
}

export type VinylDocument = HydratedDocument<Vinyl>;

@Schema()
export class Vinyl {
  @Prop()
  _id: string;

  @Prop()
  externalApiId: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  cover: string;

  @Prop()
  year: number;

  @Prop([
    raw({
      name: { type: String },
      externalApiId: { type: String },
    }),
  ])
  artist: Artist[];
}

export const VinylSchema = SchemaFactory.createForClass(Vinyl);
