"use client";
import { auth } from "@/firebase/firebase.config";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";

type MenuItemProps = {
  href: string;
  children: React.ReactNode;
};

const MenuItem = ({ href, children }: MenuItemProps) => {
  return (
    <nav className="relative px-7">
      <span className="block hover:text-[#FFAE00] text-slate-300">
        <Link href={href} legacyBehavior>
          {children}
        </Link>
      </span>
      <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-[#FFAE00] transition-all duration-300"></div>
    </nav>
  );
};

const ServiziMenu = () => {
  return (
    <div className="absolute top-full left-0 mt-0 bg-white rounded-md shadow-lg z-10 w-40">
      <span className="block py-2 hover:bg-gray-100 w-full rounded-md p-6 cursor-pointer">
        <Link href="/services/website" legacyBehavior>
          Siti web
        </Link>
      </span>
      <span className="block py-2 hover:bg-gray-100 w-full rounded-md p-6 cursor-pointer">
        <Link href="/services/ecommerce" legacyBehavior>
          E-commerce
        </Link>
      </span>
    </div>
  );
};

export default function Navbar() {
  const [user] = useAuthState(auth);

  return (
    <header className="z-50 fixed left-0 top-0 flex w-full text-gray-700 body-font border-b border-gray-200 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800/30">
      <div className="container justify-between mx-auto flex flex-wrap md:p-5 p-2.5 flex-col md:flex-row items-center">
        <div className="flex items-center flex-shrink-0 text-slate-300">
          <Link
            className="flex title-font font-medium items-center text-gray-900 md:mb-0"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-slate-300 p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="text-2xl ml-3 font-bold text-slate-400">
              TAILBLOCKS
            </span>
          </Link>
        </div>
        <div className="md:flex text-xl hidden">
          <MenuItem href="/">Home</MenuItem>
          <MenuItem href="/about">About</MenuItem>
          <div className="relative group">
            <span className="relative px-7 block hover:text-[#FFAE00] text-slate-300 cursor-pointer">
              Servizi
            </span>
            <div className="group-hover:block hidden">
              <ServiziMenu />
            </div>
          </div>
          <MenuItem href="/contacts">Contatti</MenuItem>
          <MenuItem href={user ? "/auth/login" : "/auth/login"}>
            Area Clienti
          </MenuItem>
          <button className="md:inline-flex hidden items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
