import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Department } from 'src/departments/schemas/Department.schema';

export type CourseDocument = Course & Document;

@Schema()
export class Course {
  @Prop()
  name: string;

  @Prop()
  code: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Course.name }] })
  requirements?: Course[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Department.name })
  department: Department;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
