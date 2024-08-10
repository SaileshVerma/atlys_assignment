import { useState } from "react";

import { LoginPasswordField } from "./PasswordField";
import { AuthService } from "../../services/authService";
import { UserInputField } from "./UserInputField";

export interface ErrorState {
  usernameError: string | null;
  passwordError: string | null;
}

export const LoginForm = ({
  onLoginClick,
  onRegisterClick,
}: {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}) => {
  const [password, setPassword] = useState("");
  const [input, setInput] = useState("");
  const [errorState, setErrorState] = useState<ErrorState | null>();

  function clearFields() {
    setPassword("");
    setInput("");
    setErrorState(null);
  }

  function onLoginClickHandler() {
    if (password.length < 1 && input.length < 1) {
      setErrorState((prevState) => ({
        usernameError: "Field cannot be empty",
        passwordError: "Field cannot be empty",
      }));

      return;
    }
    if (input.length < 1) {
      setErrorState((prevState) => ({
        usernameError: "Field cannot be empty",
        passwordError: null,
      }));

      return;
    }
    if (password.length < 1) {
      setErrorState((prevState) => ({
        usernameError: null,
        passwordError: "Field cannot be empty",
      }));

      return;
    }

    if (input.length < 1) {
      setErrorState((prevState) => ({
        usernameError: "Field cannot be empty",
        passwordError: null,
      }));

      return;
    }

    let authService = new AuthService();

    let userStatus = authService.login({ username: input, password });

    if (
      userStatus.usernameError !== undefined ||
      userStatus.passwordError !== undefined
    ) {
      setErrorState((prevState) => ({
        ...prevState,
        usernameError:
          userStatus.usernameError !== undefined
            ? userStatus.usernameError
            : null,
        passwordError:
          userStatus.passwordError !== undefined
            ? userStatus.passwordError
            : null,
      }));

      return;
    }

    onLoginClick();
    clearFields();
  }

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
        <UserInputField
          input={input}
          setInput={setInput}
          errors={errorState}
          setErrorState={setErrorState}
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
          errors={errorState}
          setErrorState={setErrorState}
        />
      </div>

      <button
        className="w-full text-xs md:text-base p-1 md:p-2 font-medium bg-[#4A96FF] rounded"
        onClick={onLoginClickHandler}
      >
        Login now
      </button>
      <div className="flex self-start gap-1 text-xs md:text-sm text-grey-1 font-medium">
        <span className="text-[#7F8084]">Not registered yet? </span>
        <button
          onClick={() => {
            onRegisterClick();
          }}
        >
          Register →
        </button>
      </div>
    </div>
  );
};
