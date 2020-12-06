import { Course } from 'src/courses/entities/course.entity';
import { Schedule } from '../types';

export class CreateSectionDto {
  sectionNumber: number;
  course: Course;
  schedule: Schedule[];
}
