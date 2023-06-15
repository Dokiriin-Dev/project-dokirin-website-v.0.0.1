"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavbarButton from "./NavbarButton";
import Logo from "./logo";

type MenuItemProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void; // Aggiungi la prop onClick
};

const MenuItem = ({ href, children, onClick }: MenuItemProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <nav className={`relative px-7 pt-10 md:pt-0`} onClick={handleClick}>
      <span className="block hover:text-[#FFAE00] text-slate-300">
        <Link href={href} legacyBehavior>
          {children}
        </Link>
      </span>
      <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-[#FFAE00] transition-all duration-300"></div>
    </nav>
  );
};

const ServiceMenu = () => {
  const [flyer, setFlyer] = useState(false);
  const [flyerTwo, setFlyerTwo] = useState(false);

  const handleHover = () => {
    setFlyer(!flyer);
    setFlyerTwo(!flyerTwo);
  };

  return (
    <div
      className="relative group pt-10 md:pt-0"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <button
        type="button"
        className="group rounded-md text-gray-500 inline-flex items-center font-medium hover:text-gray-900 focus:outline-none"
        onClick={() => (setFlyer(!flyer), setFlyerTwo(false))}
      >
        <span className="relative px-7 block hover:text-[#FFAE00] text-slate-300 cursor-pointer">
          Servizi
        </span>
        <svg
          className={`
          ${
            flyer === true
              ? "transform rotate-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition ease-out duration-200"
              : "transform -rotate-90 transition ease-out duration-200 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
          }, flex md:hidden
          `}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`group-hover:block ${
          flyer === true
            ? "md:pb-0 pb-16 relative opacity-100 translate-y-0 transition ease-out duration-200 z-10 md:mt-0 mt-3 transform px-2 md:w-0 w-screen max-w-md sm:px-0 lg:ml-0 md:right-6 lg:-translate-x-1/2"
            : "opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
        }`}
      >
        <div className="absolute top-0 right-0 md:mt-0 md:top-full mr-14 md:mr-0 md:left-0 left-6 rounded-sm md:shadow-lg z-10 w-[11rem] md:bg-gradient-to-b md:from-zinc-800/60 md:backdrop-blur-2xl text-slate-300">
          <span className="block py-2 w-full rounded-sm p-6 cursor-pointer hover:text-[#FFAE00]">
            <Link href="/services/website">Siti web</Link>
          </span>
          <span className="block py-2 w-full rounded-sm p-6 cursor-pointer hover:text-[#FFAE00]">
            <Link href="/services/ecommerce">E-commerce</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [isButtonOpen, setButtonOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
    setButtonOpen(!isButtonOpen); // Aggiungi questa riga

    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleMenuItemClick = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
      setButtonOpen(false); // Aggiungi questa riga
    }
  };

  return (
    <header className="z-50 fixed left-0 top-0 flex w-full text-gray-700 body-font border-b border-gray-200 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800/30">
      <div className="container justify-between mx-auto flex flex-wrap md:p-5 p-2.5 flex-col md:flex-row items-center">
        <div className="flex items-center justify-between w-full sm:w-0">
          <Logo className="ml-4 sm:ml-0" />
          <NavbarButton onClick={handleMenuToggle} isOpen={isButtonOpen} />
        </div>

        <div
          className={`md:flex text-xl ${
            isMenuOpen ? "block" : "hidden"
          } md:w-auto w-full md:h-auto h-screen`}
        >
          <MenuItem href="/" onClick={handleMenuItemClick}>
            Home
          </MenuItem>

          <ServiceMenu />

          <MenuItem href="/about" onClick={handleMenuItemClick}>
            About
          </MenuItem>
          <MenuItem href="/contacts" onClick={handleMenuItemClick}>
            Contatti
          </MenuItem>
          <MenuItem href="/auth/login" onClick={handleMenuItemClick}>
            Area Clienti
          </MenuItem>
        </div>
      </div>
    </header>
  );
}
