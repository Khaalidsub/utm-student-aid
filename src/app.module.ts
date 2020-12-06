import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LecturersModule } from './lecturers/lecturers.module';
import { DepartmentsModule } from './departments/departments.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/host'),
    LecturersModule,
    DepartmentsModule,
    CoursesModule,
  ],
})
export class AppModule {}
