import { useState } from "react";
import EyeIcon from "../../assets/icons/EyeIcon";

export const LoginPasswordField = ({
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
