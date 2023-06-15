interface NavbarButtonProps {
  onClick?: () => void;
  isOpen: boolean;
}

export default function NavbarButton({ onClick, isOpen }: NavbarButtonProps) {
  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      className={`flex md:hidden items-center space-x-2 focus:outline-none text-slate-300`}
    >
      <div className="w-6 flex items-center justify-center relative">
        <span
          className={`transform transition w-full h-px bg-current absolute ${
            isOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
          }`}
        ></span>

        <span
          className={`transform transition w-full h-px bg-current absolute ${
            isOpen ? "opacity-0 translate-x-3" : "opacity-100"
          }`}
        ></span>

        <span
          className={`transform transition w-full h-px bg-current absolute ${
            isOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
          }`}
        ></span>
      </div>
    </button>
  );
}
