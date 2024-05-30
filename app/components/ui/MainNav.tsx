"use client";
import React from "react";
import Logo from "./Logo";
// Icons
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/outline";
import ProfilePic from "./ProfilePic";

interface Props {
  openSideNav: boolean;
  setSideNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MainNav: React.FC<Props> = ({ openSideNav, setSideNav }) => {
  return (
    <div className="w-full h-16 px-4 py-2 flex justify-between items-center border-b bg-white">
      <button
        onClick={() => setSideNav(!openSideNav)}
        className="lg:hidden size-7"
      >
        <Bars3Icon />
      </button>
      <Logo />

      {/* Search bar */}
      <nav className="hidden lg:flex gap-2 items-center px-2 border-2 rounded-2xl w-8/12 max-w-xl h-full">
        <MagnifyingGlassIcon className="size-5 text-blue-500" />

        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="focus:outline-none placeholder:text-gray-500 w-full text-sm"
        />
      </nav>

      {/* Profile dropdown */}
      <div className="size-10 cursor-pointer">
        <ProfilePic />
      </div>
    </div>
  );
};
