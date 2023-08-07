import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonEntity } from './lesson.entity';
import { StudentsModule } from '../students/students.module';
@Module({
  imports: [TypeOrmModule.forFeature([LessonEntity]), StudentsModule],
  providers: [LessonResolver, LessonService]
})
export class LessonModule {}
