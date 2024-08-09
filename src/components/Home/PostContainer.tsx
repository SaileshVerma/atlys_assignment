import CommentIcon from "../../assets/icons/CommentIcon";
import MoreHorizIcon from "../../assets/icons/MoreHoriz";
import { Post } from "../../types/post";

export const PostContainer = ({
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
