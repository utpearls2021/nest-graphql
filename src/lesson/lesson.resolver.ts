import { Resolver, Query } from "@nestjs/graphql";
import { LessonType } from "./lesson.type";

@Resolver(of => LessonType)
export class LessonResolver {
  @Query(returns => LessonType)
  lesson(){
    return {
      id: 1,
      name: "Lesson",
      startdate: new Date().toISOString(),
      enddate: new Date().toISOString()
    }
  }
}