import { Department } from 'src/departments/entities/department.entity';
import { Course } from '../entities/course.entity';

export class CreateCourseDto {
  name: string;
  code: string;
  requirements?: Course[];
  department: Department;
}
