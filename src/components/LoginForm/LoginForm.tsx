import EyeIcon from "../../assets/icons/EyeIcon";

export const LoginForm = () => {
  return (
    <div className="flex flex-col rounded-lg gap-4 items-center justify-center bg-background-black-secondary w-full h-full px-6 py-8">
      <div className="flex flex-col gap-1 items-center">
        <span className="text-secondary-text-black font-medium text-xs md:text-sm">
          WELCOME BACK
        </span>
        <span className="font-semibold text-sm md:text-lg">
          Log into your account
        </span>
      </div>
      <div className="flex flex-col self-start gap-2 w-full pt-4">
        <span className="text-grey-1 text-xs md:text-sm font-medium">
          Email or Username
        </span>
        <input
          className="bg-transparent border-[1.5px] border-border-secondary-black rounded p-2 placeholder-style"
          placeholder="Enter your email or username"
        />
      </div>
      <div className="flex flex-col self-start gap-2 w-full">
        <div className="flex flex-row justify-between items-center">
          <span className="text-grey-1 text-xs md:text-sm font-medium">
            Password
          </span>
          <span className="text-grey-1 text-xs font-medium">
            Forgot password?
          </span>
        </div>
        <div className="relative w-full">
          <input
            className="bg-transparent border-[1.5px] border-border-secondary-black rounded p-2 w-full placeholder-style"
            placeholder="Enter your password"
          />
          <div className="absolute right-2 top-3">
            <EyeIcon />
          </div>
        </div>
      </div>

      <button className="w-full text-xs md:text-base p-1 md:p-2 font-medium bg-[#4A96FF] rounded">
        Login now
      </button>
      <div className="flex self-start gap-1 text-xs md:text-sm text-grey-1 font-medium">
        <span className="text-[#7F8084]">Not registered yet? </span>
        <button>Register →</button>
      </div>
    </div>
  );
};
