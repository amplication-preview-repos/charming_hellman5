/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommentWhereUniqueInput } from "./CommentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CommentUpdateInput } from "./CommentUpdateInput";

@ArgsType()
class UpdateCommentArgs {
  @ApiProperty({
    required: true,
    type: () => CommentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CommentWhereUniqueInput)
  @Field(() => CommentWhereUniqueInput, { nullable: false })
  where!: CommentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CommentUpdateInput,
  })
  @ValidateNested()
  @Type(() => CommentUpdateInput)
  @Field(() => CommentUpdateInput, { nullable: false })
  data!: CommentUpdateInput;
}

export { UpdateCommentArgs as UpdateCommentArgs };
