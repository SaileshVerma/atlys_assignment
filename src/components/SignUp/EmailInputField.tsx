import { SignUpErrorState } from "./SignUpForm";

export const EmailInputField = ({
  input,
  setInput,
  errors,
  setErrorState,
}: {
  input: string;
  errors: SignUpErrorState | undefined | null;
  setErrorState: (err: SignUpErrorState | undefined | null) => void;
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
        className={`bg-transparent border-[1.5px] rounded p-2 placeholder-style
              ${
                errors?.emailError
                  ? "border-red-600"
                  : "border-border-secondary-black"
              }
            `}
        value={input}
        placeholder="Enter your email"
        onChange={onChangeInputHandler}
      />
      <span className="text-red-600 text-xs font-light">
        {errors?.emailError}
      </span>
    </>
  );
};
