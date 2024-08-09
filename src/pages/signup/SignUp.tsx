import Logo from "../../assets/logos/Logo";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";

export const SignUp = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center p-6 md:p-0 text-white gap-3 md:gap-10">
      <div className="">
        <Logo />
      </div>
      <div className="flex-col rounded-lg  gradient-border  items-center justify-center bg-background-black-secondary w-full md:w-1/3 p-0.5">
        <SignUpForm />
      </div>
    </div>
  );
};
