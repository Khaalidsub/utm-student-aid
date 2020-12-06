import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Department } from 'src/departments/schemas/Department.schema';
import { Role } from '../types';

export type LecturerDocument = Lecturer & Document;

@Schema()
export class Lecturer {
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ enum: Role, default: Role.moderator })
  role: Role;
}

export const LecturerSchema = SchemaFactory.createForClass(Lecturer);
