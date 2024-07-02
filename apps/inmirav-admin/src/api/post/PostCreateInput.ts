import { CommentCreateNestedManyWithoutPostsInput } from "./CommentCreateNestedManyWithoutPostsInput";
import { LikeCreateNestedManyWithoutPostsInput } from "./LikeCreateNestedManyWithoutPostsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostCreateInput = {
  comments?: CommentCreateNestedManyWithoutPostsInput;
  content?: string | null;
  likes?: LikeCreateNestedManyWithoutPostsInput;
  media?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
