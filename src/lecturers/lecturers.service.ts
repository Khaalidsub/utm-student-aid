import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLecturerDto } from './dto/create-lecturer.dto';

import { Lecturer, LecturerDocument } from './schemas/lecturer.schema';

@Injectable()
export class LecturersService {
  constructor(
    @InjectModel(Lecturer.name)
    private LecturerModel: Model<LecturerDocument>,
  ) {}
  create(createSubjectInput: CreateLecturerDto) {
    const newLecturer = new this.LecturerModel(createSubjectInput);

    return newLecturer.save();
  }

  findAll() {
    return this.LecturerModel.find().exec();
  }

  findOne(id: string) {
    return this.LecturerModel.findById(id).exec();
  }

  update(id: string, data: any) {
    return this.LecturerModel.findByIdAndUpdate(id, data).exec();
  }

  remove(id: string) {
    return this.LecturerModel.findByIdAndDelete(id).exec();
  }
}
