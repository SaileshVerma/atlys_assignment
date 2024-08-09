import { Post } from "../types/post";
// @ts-ignore
import Profile1 from "../assets/profiles/profile1.png";
// @ts-ignore
import Profile2 from "../assets/profiles/profile2.png";

export const Posts: Post[] = [
  {
    profile: Profile2,
    timeAgo: "5mins",
    username: "Theresa Webb",
    commentsCounts: "24",
    postContent:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    emoji: "👋",
    isEdited: false,
  },
  {
    profile: Profile1,
    timeAgo: "8mins",
    username: "Marvin McKinney",
    commentsCounts: "20",
    postContent:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    emoji: "😞",
    isEdited: true,
  },
];
