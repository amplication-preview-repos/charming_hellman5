import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  comments?: CommentUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  password?: string;
  posts?: PostUpdateManyWithoutUsersInput;
  profilePicture?: InputJsonValue;
  roles?: InputJsonValue;
  username?: string;
};
