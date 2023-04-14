"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase.config";

function NavBar() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <header className="flex navbar justify-between p-4 items-center bg-white shadow dark:bg-gray-950">
      <div className="navbar-start md:px-40 text-3xl">
        <Link href={"/"} legacyBehavior>
          Dokirin
        </Link>
      </div>
      <div className="navbar-end md:flex pr-36 text-xl hidden">
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
    </header>
  );
}

export default NavBar;
