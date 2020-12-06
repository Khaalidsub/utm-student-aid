import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Department } from 'src/departments/schemas/Department.schema';

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

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Department.name })
  department: Department;
}

export const LecturerSchema = SchemaFactory.createForClass(Lecturer);
