import Link from "next/link";
import React from "react";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center flex-shrink-0 ${className}`}>
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
  );
}
