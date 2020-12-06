import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDepartmentDto } from './dto/create-Department.dto';

import { Department, DepartmentDocument } from './schemas/Department.schema';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectModel(Department.name)
    private DepartmentModel: Model<DepartmentDocument>,
  ) {}
  create(createSubjectInput: CreateDepartmentDto) {
    const newDepartment = new this.DepartmentModel(createSubjectInput);

    return newDepartment.save();
  }

  findAll() {
    return this.DepartmentModel.find().exec();
  }

  findOne(id: string) {
    return this.DepartmentModel.findById(id).exec();
  }

  update(id: string, data: any) {
    return this.DepartmentModel.findByIdAndUpdate(id, data).exec();
  }

  remove(id: string) {
    return this.DepartmentModel.findByIdAndDelete(id).exec();
  }
}
