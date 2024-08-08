import EyeIcon from "../../assets/icons/EyeIcon";

export const SignUpForm = () => {
  return (
    // <div className="flex flex-col w-full">
    <div className="flex flex-col rounded-lg gap-4 items-center justify-center bg-background-black-secondary w-full h-full px-6 py-8">
      <div className="flex flex-col gap-1 items-center w-full ">
        <span className="text-secondary-text-black font-medium text-xs md:text-sm">
          SIGN UP
        </span>
        <span className=" font-semibold text-sm md:text-lg">
          Create an account to continue
        </span>
      </div>
      <div className="flex flex-col self-start gap-2 w-full pt-4">
        <span className="text-grey-1 text-xs md:text-sm font-medium">
          Email
        </span>
        <input
          className="bg-transparent border-[1.5px] border-border-secondary-black rounded p-2 placeholder-style"
          placeholder="Enter your email"
        />
      </div>
      <div className="flex flex-col self-start gap-2 w-full">
        <span className="text-grey-1 text-xs md:text-sm font-medium">
          Username
        </span>
        <input
          className="bg-transparent border-[1.5px] border-border-secondary-black rounded p-2 placeholder-style"
          placeholder="Choose a preferred username"
        />
      </div>
      <div className="flex flex-col self-start gap-2 w-full">
        <span className="text-grey-1 text-xs md:text-sm font-medium">
          Password
        </span>

        <div className="relative w-full">
          <input
            className="bg-transparent border-[1.5px] border-border-secondary-black rounded p-2 w-full placeholder-style"
            placeholder="Choose a strong password"
          />
          <div className="absolute right-2 top-3">
            <EyeIcon />
          </div>
        </div>
      </div>

      <button className="w-full text-xs md:text-base p-1 md:p-2 font-medium bg-[#4A96FF] rounded">
        Continue
      </button>
      <div className="flex self-start gap-1 text-xs md:text-sm     text-grey-1 font-medium">
        <span className="text-[#7F8084]">Already have an account? </span>
        <button> Login →</button>
      </div>
    </div>
    // </div>
  );
};
