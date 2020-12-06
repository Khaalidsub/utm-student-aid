import { Department } from 'src/departments/entities/department.entity';

export class Lecturer {
  id: string;
  name: string;
  email: string;
  website: string;
  building: string;
  room: string;
  department: Department;
}
