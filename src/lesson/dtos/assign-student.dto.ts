import { Field, ID, InputType,  } from "@nestjs/graphql";
import { IsNotEmpty, IsArray } from "class-validator";

@InputType()

export class AssignStudentDto {

  @IsNotEmpty()
  @IsArray()
  @Field(type => [ID])
  students: string[];

  @IsNotEmpty()
  @Field(type => ID)
  id: string;
}
