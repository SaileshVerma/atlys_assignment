import { useState } from "react";
import { EmailInputField } from "./EmailInputField";
import { PasswordField } from "./PasswordField";
import { UserNameField } from "./UsernameField";
import { useCustomRouter } from "../../router/router";
import { AuthService } from "../../services/authService";
import { isValidEmail } from "../../utils/helpers";

export interface SignUpErrorState {
  usernameError: string | null;
  passwordError: string | null;
  emailError: string | null;
}

export const SignUpForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [errorState, setErrorState] = useState<SignUpErrorState | null>();

  const { currentRoute, navigateTo } = useCustomRouter();

  function onLoginClickHandler() {
    if (password.length < 1 && username.length < 1 && email.length < 1) {
      setErrorState((prevState) => ({
        usernameError: "Field cannot be empty",
        passwordError: "Field cannot be empty",
        emailError: "Field cannot be empty",
      }));

      return;
    }

    if (email.length > 1) {
      if (!isValidEmail(email)) {
        setErrorState((prevState) => ({
          emailError: "Not a valid email",
          usernameError: null,
          passwordError: null,
        }));
      }
      return;
    }

    if (username.length < 1) {
      setErrorState((prevState) => ({
        usernameError: "Field cannot be empty",
        passwordError: prevState?.passwordError ?? null,
        emailError: prevState?.emailError ?? null,
      }));

      return;
    }
    if (password.length < 1) {
      setErrorState((prevState) => ({
        usernameError: prevState?.usernameError ?? null,
        passwordError: "Field cannot be empty",
        emailError: prevState?.emailError ?? null,
      }));

      return;
    }

    if (email.length < 1) {
      setErrorState((prevState) => ({
        emailError: "Field cannot be empty",
        usernameError: prevState?.usernameError ?? null,
        passwordError: prevState?.passwordError ?? null,
      }));

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

    // navigateTo("/");
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
        <button> Login →</button>
      </div>
    </div>
  );
};
