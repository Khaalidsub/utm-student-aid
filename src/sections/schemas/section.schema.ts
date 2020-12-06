import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Course } from 'src/courses/schemas/Course.schema';
import { Days } from '../types';

export type SectionDocument = Section & Document;
@Schema()
export class Schedule {
  @Prop(Days)
  day: Days;

  @Prop()
  time_start: number;

  @Prop()
  hours: number;

  @Prop()
  room?: string;
}

@Schema()
export class Section {
  @Prop()
  sectionNumber: number;

  @Prop([Schedule])
  schedule?: Schedule[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Course.name })
  course: Course;
}

export const SectionSchema = SchemaFactory.createForClass(Section);
