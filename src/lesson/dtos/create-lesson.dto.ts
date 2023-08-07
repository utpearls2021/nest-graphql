import { Field, ID, InputType } from "@nestjs/graphql";
import { MinLength, IsDateString, IsArray, IsOptional } from "class-validator";
@InputType()
export class CreateLessonDto {
  @MinLength(1)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startdate: string;

  @IsDateString()
  @Field()
  enddate: string;

  @Field(() => [ID], { defaultValue:[]})
  @IsArray()
  @IsOptional()
  students: string[];
}