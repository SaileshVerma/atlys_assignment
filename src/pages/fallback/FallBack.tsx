import { useCustomRouter } from "../../router/router";

export const FallbackPage = () => {
  const { navigateTo } = useCustomRouter();

  return (
    <div
      className={`relative flex h-screen w-screen flex-col justify-center overflow-x-hidden items-center gap-10 text-white `}
    >
      <div className="flex flex-col gap-10 w-full md:w-1/2  md:items-start justify-start">
        <span className="text-grey-1 max-w-[500px] text-6xl font-medium md:font-extrabold md:text-9xl">
          Oops!
        </span>
        <span className="text-subtext-grey max-w-[500px] text-xl md:text-3xl">
          We can't seem to find the page you are looking for.
        </span>
        <button
          className="w-1/3 text-lg md:text-xl p-1 md:p-2 font-medium bg-[#4A96FF] rounded"
          onClick={() => navigateTo("/login")}
        >
          Go Back →
        </button>
      </div>
    </div>
  );
};
