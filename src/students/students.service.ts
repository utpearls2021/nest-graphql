import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dtos/create-student.dto';
@Injectable()
export class StudentsService {
  constructor(@InjectRepository(Student) private repo: Repository<Student>) {}

  async getAll() {
    return await this.repo.find();
  }

  async getById(id : number) {
    return await this.repo.findOne({ where: { id: id } });
  }

  async create(createStudentDto: CreateStudentDto) {
    const { firstName, lastName } = createStudentDto;
    const student = this.repo.create({
      id: (await this.getAll()).length + 1,
      firstName: firstName,
      lastName: lastName
    });

    return this.repo.save(student);
  }

}
