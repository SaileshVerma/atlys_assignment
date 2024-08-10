import { User } from "./user";

export interface Post {
  profile: string;
  timeAgo: string;
  username: string;
  commentsCounts: string;
  postContent: string;
  emoji: string;
  isEdited: boolean;
}
