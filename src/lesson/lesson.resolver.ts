import { Resolver, Query, Mutation, Args, ResolveField, Parent } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonDto } from "./dtos/create-lesson.dto";
import { AssignStudentDto } from "./dtos/assign-student.dto";
import { LessonEntity } from "./lesson.entity";
import { StudentsService } from "../students/students.service";
@Resolver(of => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService, private studentService: StudentsService) {}

  @Query(returns => LessonType)
  lesson(@Args("id") id?: string){
    return this.lessonService.getById(id);
  }

  @Query(returns => [LessonType])
  lessons(){
    return this.lessonService.getAllLesson();
  }

  @Mutation(returns => LessonType)
  createLesson(@Args("createLessonDto") createLessonDto: CreateLessonDto) {
    return this.lessonService.createCourse(createLessonDto);
  }

  @Mutation(returns => LessonType)
  assignStudentsToLesson(@Args("assignStudentToLesson") assignStudentDto: AssignStudentDto) {
    const { id, students } = assignStudentDto;
    return this.lessonService.assignLesson(id, students);
  }

  @ResolveField()
  async students(@Parent() lessonEntity: LessonEntity) {
    const { students } = lessonEntity;
    await this.studentService.getManyStudents(students);
  }
}