import Logo from "../../assets/logos/Logo";
import { SignUpForm } from "../../components/SignUp/SignUpForm";
import { useCustomRouter } from "../../router/router";
import { Routes } from "../../utils/constants";

export const SignUpPage = () => {
  const { navigateTo } = useCustomRouter();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center p-6 md:p-0 text-white gap-3 md:gap-10">
      <div className="">
        <Logo />
      </div>
      <div className="flex-col rounded-lg  gradient-border  items-center justify-center bg-background-black-secondary w-full md:w-1/3 p-0.5">
        <SignUpForm
          onRegisterClick={() => navigateTo(Routes.LOGIN)}
          onSignUpClick={() => navigateTo(Routes.HOME)}
        />
      </div>
    </div>
  );
};
