import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Garage {
  @Prop({ type: String, required: true })
  type: string;

  @Prop({ country: String, required: true, default: 'mongolia' })
  country: string;

  @Prop({ city: String, required: true })
  city: string;

  @Prop({ district: String, required: true })
  district: string;

  @Prop({ location: String, required: true })
  location: string;

  @Prop({ size: Number })
  size: Number;

  @Prop({ total: Number, required: true })
  total: Number;

  @Prop({ time: Number, required: true })
  time: Number;

  @Prop({ payment: Number, required: true })
  payment: Number;

  @Prop({ userId: String, required: true })
  userId: string;

  @Prop({ createAt: Date, default: Date.now(), required: true })
  createAt: Date;
}

export type GarageDocument = Garage & Document;
export const GarageSchema = SchemaFactory.createForClass(Garage);
