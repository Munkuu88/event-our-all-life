import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
  @Prop({ email: String, required: true, unique: true })
  email: string;

  @Prop({ name: String, required: true })
  name: string;

  @Prop({ password: String, required: true })
  password: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
