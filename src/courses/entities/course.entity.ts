import { Department } from 'src/departments/entities/department.entity';

export class Course {
  id: string;
  name: string;
  code: string;
  requirements?: Course[];
  department: Department;
}
