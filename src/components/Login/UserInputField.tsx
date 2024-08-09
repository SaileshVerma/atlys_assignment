import { ErrorState } from "./LoginForm";

export const UserInputField = ({
  input,
  setInput,
  errors,
  setErrorState,
}: {
  input: string;
  errors: ErrorState | undefined | null;
  setErrorState: (err: ErrorState | undefined | null) => void;
  setInput: (val: string) => void;
}) => {
  function onChangeInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const text = event.target.value;
    setErrorState(undefined);
    setInput(text);
  }

  return (
    <>
      <input
        className={`bg-transparent border-[1.5px]  rounded p-2 placeholder-style
        ${
          errors?.usernameError
            ? "border-red-600"
            : "border-border-secondary-black"
        }
        `}
        placeholder="Enter your email or username"
        value={input}
        onChange={onChangeInputHandler}
      />
      <span className="text-red-600 text-xs font-light">
        {errors?.usernameError}
      </span>
    </>
  );
};
