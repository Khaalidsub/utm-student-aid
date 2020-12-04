import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LecturersModule } from './lecturers/lecturers.module';

@Module({
  imports: [LecturersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
