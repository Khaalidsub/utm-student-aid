import { Module } from '@nestjs/common';
import { LecturersModule } from './lecturers/lecturers.module';

@Module({
  imports: [LecturersModule, MongooseModule.forRoot('mongodb://mongodb/selps')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
