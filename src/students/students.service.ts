import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository, In } from 'typeorm';
import { CreateStudentDto } from './dtos/create-student.dto';
@Injectable()
export class StudentsService {
  constructor(@InjectRepository(Student) private repo: Repository<Student>) {}

  async getAll() {
    return await this.repo.find();
  }

  async getById(id : string) {
    return await this.repo.findOne({ where: { id: id } });
  }

  async create(createStudentDto: CreateStudentDto) {
    const { firstName, lastName } = createStudentDto;
    const student = this.repo.create({
      id: ((await this.getAll()).length + 1).toString(),
      firstName: firstName,
      lastName: lastName
    });

    return this.repo.save(student);
  }

  async getManyStudents(studentIds: string[]) {
    console.log("studentIds", studentIds);
    const query =  await this.repo.query(`SELECT * FROM student WHERE id IN (${[...studentIds]});`);
    console.log("query",query);
    return query;
  }

}
