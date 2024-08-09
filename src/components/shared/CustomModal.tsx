import CrossIcon from "../../assets/icons/CrossIcon";

interface CustomModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export function CustomModal({ isOpen, children, onClose }: CustomModalProps) {
  return (
    <>
      <div
        className={`fixed backdrop-blur-[2px] bg-black/60 h-full w-full transition-opacity ease-in-out duration-500 delay-100  items-center ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      />

      <div
        className={`absolute ease-in-out duration-500 delay-100 transition-opacity flex items-center inset-0 justify-center ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center w-full p-6 md:p-0">
          <div className="relative flex flex-col rounded-lg  gradient-border  items-center justify-center bg-background-black-secondary w-full md:w-1/3 p-0.5">
            <div
              className="absolute right-6 top-6 bg-background-black-primary rounded-full p-3 cursor-pointer"
              onClick={onClose}
            >
              <CrossIcon />
            </div>

            {children}
          </div>
        </div>
      </div>
    </>
  );
}
