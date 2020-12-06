import { Course } from 'src/courses/entities/course.entity';
import { Schedule } from '../types';

export class Section {
  sectionNumber: number;
  course: Course;
  schedule: [Schedule];
}
