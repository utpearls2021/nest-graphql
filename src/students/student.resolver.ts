import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { StudentType } from "./student.type";
import { StudentsService } from "./students.service";
import { HttpException } from "@nestjs/common";
import { CreateStudentDto } from "./dtos/create-student.dto";

@Resolver(of => StudentType)
export class StudentReslover {
  constructor(private studentService: StudentsService) {}

  @Query(returns => [StudentType])
  students() {
    return this.studentService.getAll();
  }

  @Query(returns => StudentType)
  async student(@Args("id") id: string) {
    return await this.studentService.getById(id);
  }

  @Mutation(returns => StudentType)
  createStudent(@Args("student") createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }
}
