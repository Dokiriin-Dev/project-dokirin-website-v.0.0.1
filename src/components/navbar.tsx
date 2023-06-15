"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavbarButton from "./layout/NavbarButton";
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
  return (
    <div className="absolute top-full left-0 mt-0 rounded-sm shadow-lg z-10 w-40 bg-gradient-to-b from-zinc-800/60 backdrop-blur-2xl text-slate-300">
      <span className="block py-2 w-full rounded-sm p-6 cursor-pointer hover:text-[#FFAE00]">
        <Link href="/services/website" legacyBehavior>
          Siti web
        </Link>
      </span>
      <span className="block py-2 w-full rounded-sm p-6 cursor-pointer hover:text-[#FFAE00]">
        <Link href="/services/ecommerce" legacyBehavior>
          E-commerce
        </Link>
      </span>
    </div>
  );
};

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  const handleMenuItemClick = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };
  return (
    <header className="z-50 fixed left-0 top-0 flex w-full text-gray-700 body-font border-b border-gray-200 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800/30">
      <div className="container justify-between mx-auto flex flex-wrap md:p-5 p-2.5 flex-col md:flex-row items-center">
        <div className="flex items-center justify-between w-full sm:w-0">
          <Logo className="ml-5 sm:ml-0" />
          <NavbarButton onClick={handleMenuToggle} />
        </div>

        <div
          className={`md:flex text-xl ${
            isMenuOpen ? "block" : "hidden"
          } md:w-auto w-full md:h-auto h-screen`}
        >
          <MenuItem href="/" children={"Home"} onClick={handleMenuItemClick} />
          <div className="relative group pt-10 md:pt-0">
            <span className="relative px-7 block hover:text-[#FFAE00] text-slate-300 cursor-pointer">
              Servizi
            </span>

            <div className="group-hover:block hidden">
              <ServiceMenu />
            </div>
          </div>
          <MenuItem
            href="/about"
            children={"About"}
            onClick={handleMenuItemClick}
          />
          <MenuItem
            href="/contacts"
            children={"Contatti"}
            onClick={handleMenuItemClick}
          />
          <MenuItem
            href="/auth/login"
            children={"Area Clienti"}
            onClick={handleMenuItemClick}
          />
        </div>
      </div>
    </header>
  );
}
