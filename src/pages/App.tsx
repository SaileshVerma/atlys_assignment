// @ts-ignore
import Profile1 from "../assets/profiles/profile1.png";
// @ts-ignore
import Profile2 from "../assets/profiles/profile2.png";

import CommentIcon from "../assets/icons/CommentIcon";
import MoreHorizIcon from "../assets/icons/MoreHoriz";

function App() {
  return (
    <div className="flex h-screen w-screen thin-scrollbar flex-col items-center gap-6 text-white overflow-y-scroll">
      <div className="flex flex-col pt-6 gap-3 w-1/2 items-start justify-start">
        <span className="text-grey-1 text-[28px] font-medium">Hello Jane</span>
        <span className="text-subtext-grey max-w-[500px]">
          How are you doing today? Would you like to share something with the
          community 🤗
        </span>
      </div>
      <div className="flex flex-col gap-2 w-1/2">
        <CreateCommentContainer />

        {Posts.map((post, index) => {
          return (
            <PostContainer
              key={index}
              commentsCounts={post.commentsCounts}
              emoji={post.emoji}
              isEdited={post.isEdited}
              postContent={post.postContent}
              profile={post.profile}
              timeAgo={post.timeAgo}
              username={post.username}
            />
          );
        })}
      </div>
    </div>
  );
}

const CreateCommentContainer = () => {
  return (
    <div className="flex flex-col py-6 px-5 gap-4 border-2 bg-background-black-secondary border-border-secondary-black items-start rounded-lg">
      <span className="text-lg font-medium text-grey-1">Create post</span>
      <div className="flex items-center gap-4 w-full rounded-lg bg-background-black-ternary p-4">
        <div className="bg-background-black-secondary p-3 rounded-full">💬</div>
        <span className="text-subtext-grey">How are you feeling today?</span>
      </div>
      <button className="px-8 py-2 font-medium self-end bg-[#4A96FF] rounded">
        Post
      </button>
    </div>
  );
};

const PostContainer = ({
  profile,
  timeAgo,
  username,
  commentsCounts,
  postContent,
  emoji,
  isEdited,
}: Post) => {
  return (
    <div className="flex flex-col py-6 px-5 gap-4 border-2 bg-background-black-secondary border-border-secondary-black items-start rounded-lg">
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-2 items-center">
          <img src={profile} className="w-[44px] h-[44px]" alt={profile} />
          <div className="flex flex-col gap-0">
            <div className="font-medium text-grey-1">{username}</div>
            <p className="font-medium text-sm text-subtext-grey">
              {timeAgo} ago {isEdited && <span>• Edited</span>}
            </p>
          </div>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="flex items-center gap-4 w-full rounded-lg bg-background-black-ternary p-4">
        <div className="bg-background-black-secondary p-3 rounded-full">
          {emoji}
        </div>
        <span className="text-subtext-grey">{postContent}</span>
      </div>
      <div className="flex gap-1.5 items-center justify-center">
        <CommentIcon />
        <span className="font-medium text-sm text-subtext-grey">
          {commentsCounts} comments
        </span>
      </div>
    </div>
  );
};

export default App;

interface Post {
  profile: string;
  timeAgo: string;
  username: string;
  commentsCounts: string;
  postContent: string;
  emoji: string;
  isEdited: boolean;
}

const Posts: Post[] = [
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
