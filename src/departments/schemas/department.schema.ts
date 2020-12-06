import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type DepartmentDocument = Department & Document;

@Schema()
export class Department {
  @Prop()
  name: string;

  @Prop()
  website: string;
  @Prop()
  building: string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
