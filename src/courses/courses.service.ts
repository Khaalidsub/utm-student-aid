import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCourseDto } from './dto/create-Course.dto';

import { Course, CourseDocument } from './schemas/Course.schema';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Course.name)
    private CourseModel: Model<CourseDocument>,
  ) {}
  create(createSubjectInput: CreateCourseDto) {
    const newCourse = new this.CourseModel(createSubjectInput);

    return newCourse.save();
  }

  findAll() {
    return this.CourseModel.find().exec();
  }

  findOne(id: string) {
    return this.CourseModel.findById(id).exec();
  }

  update(id: string, data: any) {
    return this.CourseModel.findByIdAndUpdate(id, data).exec();
  }

  remove(id: string) {
    return this.CourseModel.findByIdAndDelete(id).exec();
  }
}
