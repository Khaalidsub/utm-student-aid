import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSectionDto } from './dto/create-Section.dto';

import { Section, SectionDocument } from './schemas/Section.schema';

@Injectable()
export class SectionsService {
  constructor(
    @InjectModel(Section.name)
    private SectionModel: Model<SectionDocument>,
  ) {}
  create(createSubjectInput: CreateSectionDto) {
    const newSection = new this.SectionModel(createSubjectInput);

    return newSection.save();
  }

  findAll() {
    return this.SectionModel.find().exec();
  }

  findOne(id: string) {
    return this.SectionModel.findById(id).exec();
  }

  update(id: string, data: any) {
    return this.SectionModel.findByIdAndUpdate(id, data).exec();
  }

  remove(id: string) {
    return this.SectionModel.findByIdAndDelete(id).exec();
  }
}
