import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentReslover } from "./student.resolver";

@Module({
  imports:[TypeOrmModule.forFeature([Student])],
  providers: [StudentReslover, StudentsService],
  exports: [StudentsService]
})
export class StudentsModule {}
