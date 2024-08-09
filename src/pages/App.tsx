// @ts-ignore
import Profile1 from "../assets/profiles/profile1.png";
// @ts-ignore
import Profile2 from "../assets/profiles/profile2.png";

import CommentIcon from "../assets/icons/CommentIcon";
import MoreHorizIcon from "../assets/icons/MoreHoriz";
import { useState } from "react";
import { CustomModal } from "../components/shared/CustomModal";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { SignUpForm } from "../components/SignUpForm/SignUpForm";
import { Login } from "./login/Login";
import { useCustomRouter } from "../router/router";
import { Sign } from "crypto";
import { SignUp } from "./signup/SignUp";
//bg-black/80
function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div className="relative flex h-screen w-screen   thin-scrollbar flex-col items-center gap-6 text-white overflow-y-scroll">
      <div className="absolute h-full w-full backdrop-blur-[2px] items-center" />
      <CustomModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        <LoginForm />
      </CustomModal>
      <div className="flex flex-col gap-3 w-full pt-4 px-4 md:px-0 md:pt-6 md:w-1/2  md:items-start justify-start">
        <span className="text-grey-1 text-2xl md:text-[28px] font-medium">
          Hello Jane
        </span>
        <span className="text-subtext-grey max-w-[500px] text-xs md:text-base">
          How are you doing today? Would you like to share something with the
          community 🤗
        </span>
      </div>
      <div className="flex flex-col gap-3 p-4 md:p-0 w-full md:w-1/2">
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

function App() {
  const { currentRoute, navigateTo } = useCustomRouter();

  const currentPage = () => {
    switch (currentRoute) {
      case "/":
        return <HomePage />;
      case "/login":
        return <Login />;
      case "/signup":
        return <SignUp />;
      default:
        return <HomePage />;
    }
  };

  return <>{currentPage()}</>;
}

const CreateCommentContainer = () => {
  return (
    <div className="flex flex-col py-6 px-5 gap-4 border-2 bg-background-black-secondary border-border-secondary-black items-start rounded-lg">
      <span className="md:text-lg font-medium text-grey-1">Create post</span>
      <div className="flex items-center gap-4 w-full rounded-lg bg-background-black-ternary p-4">
        <div className="bg-background-black-secondary text-sm md:text-base p-2 md:p-3 rounded-full">
          💬
        </div>
        <span className="text-subtext-grey text-sm md:text-base">
          How are you feeling today?
        </span>
      </div>
      <button className="px-6 md:px-8 py-2 text-sm md:text-base font-medium self-end bg-[#4A96FF] rounded">
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
          <img
            src={profile}
            className="md:w-[44px] md:h-[44px] w-[33px] h-[33px]"
            alt={profile}
          />
          <div className="flex flex-col gap-0">
            <div className="font-medium text-grey-1 text-sm md:text-base">
              {username}
            </div>
            <p className="font-medium text-xs md:text-sm text-subtext-grey">
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
        <span className="text-subtext-grey text-sm md:text-base">
          {postContent}
        </span>
      </div>
      <div className="flex gap-1.5 items-center justify-center">
        <CommentIcon />
        <span className="font-medium text-xs md:text-sm text-subtext-grey">
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
