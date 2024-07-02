import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Post = {
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  likes?: Array<Like>;
  media: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
