import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";
import { LessonService } from "./lesson.service";
import { CreateLessonDto } from "./dtos/create-lesson.dto";
@Resolver(of => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

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
}