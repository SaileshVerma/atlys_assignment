import { useState } from "react";
import { EmailInputField } from "./EmailInputField";
import { PasswordField } from "./PasswordField";
import { UserNameField } from "./UsernameField";
import { AuthService } from "../../services/authService";
import { isValidEmail } from "../../utils/helpers";

export interface SignUpErrorState {
  usernameError: string | null;
  passwordError: string | null;
  emailError: string | null;
}

export const SignUpForm = ({
  onSignUpClick,
  onRegisterClick,
}: {
  onSignUpClick: () => void;
  onRegisterClick: () => void;
}) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [errorState, setErrorState] = useState<SignUpErrorState | null>();

  function clearFields() {
    setPassword("");
    setEmail("");
    setUsername("");
    setErrorState(null);
  }

  function onLoginClickHandler() {
    const errors: SignUpErrorState = {
      usernameError: null,
      passwordError: null,
      emailError: null,
    };

    if (username.length < 1) {
      errors.usernameError = "Field cannot be empty";
    }

    if (password.length < 1) {
      errors.passwordError = "Field cannot be empty";
    }

    if (email.length < 1) {
      errors.emailError = "Field cannot be empty";
    } else if (!isValidEmail(email)) {
      errors.emailError = "Not a valid email";
    }

    setErrorState((prevState) => ({
      ...prevState,
      ...errors,
    }));

    if (errors.usernameError || errors.passwordError || errors.emailError) {
      return;
    }

    let authService = new AuthService();

    let userStatus = authService.register({ username, password, email });

    if (
      userStatus.usernameError !== undefined ||
      userStatus.emailError !== undefined ||
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
        emailError:
          userStatus.emailError !== undefined ? userStatus.emailError : null,
      }));

      return;
    }

    onSignUpClick();
    clearFields();
  }

  return (
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
        <EmailInputField
          input={email}
          setInput={setEmail}
          errors={errorState}
          setErrorState={setErrorState}
        />
      </div>
      <div className="flex flex-col self-start gap-2 w-full">
        <span className="text-grey-1 text-xs md:text-sm font-medium">
          Username
        </span>
        <UserNameField
          input={username}
          setInput={setUsername}
          errors={errorState}
          setErrorState={setErrorState}
        />
      </div>
      <div className="flex flex-col self-start gap-2 w-full">
        <span className="text-grey-1 text-xs md:text-sm font-medium">
          Password
        </span>

        <PasswordField
          password={password}
          setPasswordValue={setPassword}
          errors={errorState}
          setErrorState={setErrorState}
        />
      </div>

      <button
        className="w-full text-xs md:text-base p-1 md:p-2 font-medium bg-[#4A96FF] rounded"
        onClick={() => onLoginClickHandler()}
      >
        Continue
      </button>
      <div className="flex self-start gap-1 text-xs md:text-sm text-grey-1 font-medium">
        <span className="text-[#7F8084]">Already have an account? </span>
        <button onClick={() => onRegisterClick()}> Login →</button>
      </div>
    </div>
  );
};
