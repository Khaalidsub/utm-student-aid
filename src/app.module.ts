import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LecturersModule } from './lecturers/lecturers.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/host'),
    LecturersModule,
  ],
})
export class AppModule {}
