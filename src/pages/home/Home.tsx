import { useState } from "react";
import { CustomModal } from "../../components/shared/CustomModal";
import { LoginForm } from "../../components/Login/LoginForm";

import { PostContainer } from "../../components/Home/PostContainer";
import { CreatePostContainer } from "../../components/Home/CreatePost";
import { Posts } from "../../utils/tempData";

export function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <div
      className={`relative flex h-screen w-screen thin-scrollbar flex-col overflow-x-hidden items-center gap-6 text-white  ${
        isModalOpen ? "overflow-hidden" : "overflow-y-scroll"
      } `}
    >
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
        <CreatePostContainer setIsModalOpen={setIsModalOpen} />

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
