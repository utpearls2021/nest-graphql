import { Column, Entity, PrimaryGeneratedColumn, ObjectIdColumn } from "typeorm";

@Entity()
export class LessonEntity {
  @ObjectIdColumn()
  _id: string;

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  startdate: string;

  @Column()
  enddate: string;

  @Column()
  students: string[];
}