import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PostWhereInput = {
  comments?: CommentListRelationFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  media?: JsonFilter;
  user?: UserWhereUniqueInput;
};
