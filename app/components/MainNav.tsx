import React from "react";
import Logo from "./ui/Logo";
// Icons
import { IoMenuOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

export const MainNav = () => {
  return (
    <header className="sticky top-0 w-full bg-white px-4 py-2 h-16 flex gap-12 justify-between items-center border-b">
      <IoMenuOutline className="size-7 lg:hidden" />
      <Logo />

      {/* Search bar */}
      <nav className="hidden lg:flex gap-2 items-center px-2 border-2 rounded-2xl w-8/12 max-w-xl h-full">
        <IoMdSearch className="size-5 text-blue-500" />

        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="focus:outline-none placeholder:text-gray-500 w-full"
        />
      </nav>

      {/* Profile dropdown */}
      <div className="rounded-full bg-blue-500 p-5"></div>
    </header>
  );
};
