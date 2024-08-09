import EyeIcon from "../../assets/icons/EyeIcon";
import { useState } from "react";
import { SignUpErrorState } from "./SignUpForm";

export const PasswordField = ({
  password,
  errors,
  setErrorState,
  setPasswordValue,
}: {
  password: string;
  errors: SignUpErrorState | undefined | null;
  setErrorState: (err: SignUpErrorState | undefined | null) => void;
  setPasswordValue: (val: string) => void;
}) => {
  const [showPassword, setShowPassword] = useState(false);

  function onChangePasswordHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const text = event.target.value;
    setErrorState(undefined);
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
      <>
        <input
          type={showPassword ? "text" : "password"}
          className={`bg-transparent border-[1.5px] rounded p-2 w-full placeholder-style
           ${
             errors?.passwordError
               ? "border-red-600"
               : "border-border-secondary-black"
           }
          `}
          placeholder="Enter your password"
          value={password}
          onChange={onChangePasswordHandler}
        />
        <span className="text-red-600 text-xs md:text-sm font-light">
          {errors?.passwordError}
        </span>
      </>
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
