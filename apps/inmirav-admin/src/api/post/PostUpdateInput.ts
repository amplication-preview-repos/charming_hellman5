import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";
import { LikeUpdateManyWithoutPostsInput } from "./LikeUpdateManyWithoutPostsInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostUpdateInput = {
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  likes?: LikeUpdateManyWithoutPostsInput;
  media?: InputJsonValue;
  user?: UserWhereUniqueInput | null;
};
