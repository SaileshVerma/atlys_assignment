import CommentIcon from "../../assets/icons/CommentIcon";
import MoreHorizIcon from "../../assets/icons/MoreHoriz";
import { Post } from "../../types/post";
import { User } from "../../types/user";

export const PostContainer = ({
  post,
  currentUser,
  setIsModalOpen,
}: {
  post: Post;
  currentUser?: User | undefined | null;
  setIsModalOpen: (val: boolean) => void;
}) => {
  return (
    <div className="flex flex-col py-6 px-5 gap-4 border-2 bg-background-black-secondary border-border-secondary-black items-start rounded-lg">
      <div className="flex w-full items-center justify-between">
        <div className="flex gap-2 items-center">
          <img
            src={post.profile}
            className="md:w-[44px] md:h-[44px] w-[33px] h-[33px]"
            alt={post.profile}
          />
          <div className="flex flex-col gap-0">
            <div className="font-medium text-grey-1 text-sm md:text-base">
              {post.username}
            </div>
            <p className="font-medium text-xs md:text-sm text-subtext-grey">
              {post.timeAgo} ago {post.isEdited && <span>• Edited</span>}
            </p>
          </div>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="flex items-center gap-4 w-full rounded-lg bg-background-black-ternary p-4">
        <div className="bg-background-black-secondary p-3 rounded-full">
          {post.emoji}
        </div>
        <span className="text-subtext-grey text-sm md:text-base">
          {post.postContent}
        </span>
      </div>
      <div
        className="flex gap-1.5 items-center justify-center cursor-pointer"
        onClick={() => !currentUser && setIsModalOpen(true)}
      >
        <CommentIcon />
        <span className="font-medium text-xs md:text-sm text-subtext-grey">
          {post.commentsCounts} comments
        </span>
      </div>
    </div>
  );
};
