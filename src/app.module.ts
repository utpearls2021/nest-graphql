import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonEntity } from './lesson/lesson.entity';
import { StudentsModule } from './students/students.module';
import { Student } from './students/student.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mongodb",
      url: "mongodb+srv://nestgql:nestgql@cluster0.4ydkyjd.mongodb.net/?retryWrites=true&w=majority",
      synchronize: true,
      useUnifiedTopology: true,
      entities: [LessonEntity, Student]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true
    }),
    LessonModule,
    StudentsModule,
  ]
})
export class AppModule {}
