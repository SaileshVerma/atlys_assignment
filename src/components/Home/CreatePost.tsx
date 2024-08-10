import { User } from "../../types/user";

export const CreatePostContainer = ({
  currentUser,
  setIsModalOpen,
}: {
  currentUser?: User | undefined | null;
  setIsModalOpen: (val: boolean) => void;
}) => {
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
      <button
        className="px-6 md:px-8 py-2 text-sm md:text-base font-medium self-end bg-[#4A96FF] rounded cursor-pointer"
        onClick={() => !currentUser && setIsModalOpen(true)}
      >
        Post
      </button>
    </div>
  );
};
