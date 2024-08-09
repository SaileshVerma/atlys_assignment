import { useEffect, useRef, useState } from "react";
import EyeIcon from "../../assets/icons/EyeIcon";
import { useCustomRouter } from "../../router/router";

export const LoginForm = () => {
  const [password, setPassword] = useState("");

  const { currentRoute, navigateTo } = useCustomRouter();

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
          <span className="text-grey-1 text-xs font-medium cursor-pointer">
            Forgot password?
          </span>
        </div>

        <LoginPasswordField
          password={password}
          setPasswordValue={setPassword}
        />
      </div>

      <button className="w-full text-xs md:text-base p-1 md:p-2 font-medium bg-[#4A96FF] rounded">
        Login now
      </button>
      <div className="flex self-start gap-1 text-xs md:text-sm text-grey-1 font-medium">
        <span className="text-[#7F8084]">Not registered yet? </span>
        <button
          onClick={() => {
            navigateTo("/signup");
          }}
        >
          Register →
        </button>
      </div>
    </div>
  );
};

const LoginPasswordField = ({
  password,
  setPasswordValue,
}: {
  password: string;
  setPasswordValue: (val: string) => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  function onChangePasswordHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const text = event.target.value;

    setPasswordValue(text);
  }

  function displayPassword() {
    setTimeout(() => {
      setShowPassword(false);
    }, 400);

    setShowPassword(true);
  }

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        className="bg-transparent border-[1.5px] border-border-secondary-black rounded p-2 w-full placeholder-style"
        placeholder="Enter your password"
        value={password}
        onChange={onChangePasswordHandler}
      />
      <div
        className="absolute right-2 top-3 cursor-pointer"
        onClick={() => {
          displayPassword();
        }}
      >
        <EyeIcon />
      </div>
    </div>
  );
};
