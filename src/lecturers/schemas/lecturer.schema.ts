import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type LecturerDocument = Lecturer & Document;

@Schema()
export class Lecturer {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  website: string;
  @Prop()
  building: string;
  @Prop()
  room: string;
}

export const LecturerSchema = SchemaFactory.createForClass(Lecturer);
