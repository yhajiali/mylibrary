import React from "react";
import { IoMdSearch } from "react-icons/io";
import Logo from "./ui/Logo";

export const MainNav = () => {
  return (
    <nav className="fixed w-full bg-white px-4 py-2 h-16 flex gap-12 justify-between items-center border-b">
      <Logo />

      {/* Search bar */}
      <div className="hidden sm:flex gap-2 items-center px-2 border-2 rounded-2xl w-8/12 max-w-xl h-full">
        <IoMdSearch className="size-5 text-blue-400" />

        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="focus:outline-none placeholder:text-blue-400"
        />
      </div>

      {/* Profile dropdown */}
      <div className="rounded-full bg-blue-400 p-5"></div>
    </nav>
  );
};
