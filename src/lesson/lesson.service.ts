import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessonEntity } from './lesson.entity';
import { Repository } from 'typeorm';
import { CreateLessonDto } from "./dtos/create-lesson.dto";

@Injectable()
export class LessonService {
  constructor(@InjectRepository(LessonEntity) private lessonRepository: Repository<LessonEntity>) {}
  async getAllLesson() {
    return await this.lessonRepository.find();
  }
  async createCourse(createLessonDto: CreateLessonDto){
    const { name, startdate, enddate, students } = createLessonDto;
    const id = (await this.getAllLesson()).length + 1;
    const lesson = this.lessonRepository.create({
      id: id.toString(),
      name: name,
      startdate: startdate,
      enddate: enddate,
      students: students
    });

    return this.lessonRepository.save(lesson);
  }

  async getById(id: string){
    return await this.lessonRepository.findOne({ where: { id: id }});
  }

  async assignLesson(id: string, students: string[]) {
    const lesson = await this.getById(id);
    lesson.students = (lesson.students && lesson.students.length) ? lesson.students : [];
    lesson.students = [...lesson.students, ...students];

    return this.lessonRepository.save(lesson);
  }
}
