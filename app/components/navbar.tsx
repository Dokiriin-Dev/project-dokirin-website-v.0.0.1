"use client";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";

function NavBar() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <header className="z-50 fixed left-0 top-0 flex w-full text-gray-700 body-font border-b border-gray-200 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800/30">
      <div className="container mx-auto flex flex-wrap md:p-5 p-2.5 flex-col md:flex-row justify-center items-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 md:mb-0"
          href="https://tailblocks.cc"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>

          <span className="ml-3 text-xl">TAILBLOCKS</span>
        </Link>
        <nav className="md:ml-auto md:flex hidden flex-wrap items-center text-base justify-center">
          <div className="md:flex pr-36 text-xl hidden">
            <div className="px-7 hover:text-[#FFAE00] hover:underline">
              <Link href={"/"} legacyBehavior>
                Home
              </Link>
            </div>
            <div className="px-7 hover:text-[#FFAE00] hover:underline">
              <Link href={"/contact"} legacyBehavior>
                Contatti
              </Link>
            </div>
            <div className="px-7 hover:text-[#FFAE00] hover:underline">
              <Link href={"/about"} legacyBehavior>
                Chi siamo
              </Link>
            </div>
            <div className="px-7 hover:text-[#FFAE00] hover:underline">
              <Link href={"/services"} legacyBehavior>
                Servizi
              </Link>
            </div>
            <div className="px-7 hover:text-[#FFAE00] hover:underline">
              <Link href={user ? "/admin" : "/auth/login"} legacyBehavior>
                Area clienti
              </Link>
            </div>
          </div>
        </nav>
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
    </header>
  );
}

export default NavBar;
