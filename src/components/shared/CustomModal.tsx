import CrossIcon from "../../assets/icons/CrossIcon";

interface CustomModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

export function CustomModal({ isOpen, children, onClose }: CustomModalProps) {
  return (
    <div
      className={`absolute flex items-center inset-0 justify-center
    ${!isOpen && "hidden"}
    `}
    >
      <div className=" relative flex flex-col rounded-lg  gradient-border  items-center justify-center bg-background-black-secondary w-1/3 p-0.5">
        <div
          className="absolute right-6 top-6 bg-background-black-primary rounded-full p-3 cursor-pointer"
          onClick={onClose}
        >
          <CrossIcon />
        </div>

        {children}
      </div>
    </div>
  );
}
