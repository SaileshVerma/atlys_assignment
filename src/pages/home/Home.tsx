import { useEffect, useState } from "react";
import { CustomModal } from "../../components/shared/CustomModal";
import { LoginForm } from "../../components/Login/LoginForm";

import { PostContainer } from "../../components/Home/PostContainer";
import { CreatePostContainer } from "../../components/Home/CreatePost";
import { Posts } from "../../utils/tempData";
import { User } from "../../types/user";
import { AuthService } from "../../services/authService";
import LogoutIcon from "../../assets/icons/LogoutIcon";

export function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null | undefined>();

  useEffect(() => {
    const authService = new AuthService();
    const getCurrentUser = authService.getCurrentLoggedInUser();
    if (getCurrentUser) {
      setCurrentUser(getCurrentUser);
    }
  }, []);

  function logoutHandler() {
    const authService = new AuthService();
    authService.logout();
    setCurrentUser(null);
  }

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
        <LoginForm
          onRegisterClick={() => {}}
          onLoginClick={() => {
            setIsModalOpen(false);
          }}
        />
      </CustomModal>
      <div className="flex flex-col gap-3 w-full pt-4 px-4 md:px-0 md:pt-8 md:w-1/2  md:items-start justify-start">
        <span className="text-grey-1 text-2xl md:text-[28px] font-medium">
          Hello {currentUser?.username ?? "User"}
        </span>
        <span className="text-subtext-grey max-w-[500px] text-xs md:text-base">
          How are you doing today? Would you like to share something with the
          community 🤗
        </span>
      </div>
      <div
        className={`absolute right-2 md:right-10 top-2 md:top-4
        ${isModalOpen && "-z-10"}
        `}
      >
        <div
          className={`${!currentUser ? "hidden" : "cursor-pointer"}`}
          onClick={() => currentUser && logoutHandler()}
        >
          <div className="h-6 w-6 md:h-8 md:w-8 ">
            <LogoutIcon />
          </div>
          <span className="text-grey-1 text-xs md:text-base font-medium ">
            Logout
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-4 md:p-0 w-full md:w-1/2">
        <CreatePostContainer
          setIsModalOpen={setIsModalOpen}
          currentUser={currentUser}
        />

        {Posts.map((post, index) => {
          return (
            <PostContainer
              key={index}
              post={post}
              setIsModalOpen={setIsModalOpen}
              currentUser={currentUser}
            />
          );
        })}
      </div>
    </div>
  );
}
