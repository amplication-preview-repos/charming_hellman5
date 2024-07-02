import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type UserWhereInput = {
  comments?: CommentListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  likes?: LikeListRelationFilter;
  posts?: PostListRelationFilter;
  profilePicture?: JsonFilter;
  username?: StringFilter;
};
