import { Field, InputType } from "@nestjs/graphql";
import { MinLength, IsDateString} from "class-validator";

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
}