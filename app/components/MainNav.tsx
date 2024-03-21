import React from "react";
import Link from "next/link";

export const MainNav = () => {
  return (
    <nav className="fixed w-full bg-white px-6 h-16 flex justify-between items-center border-b">
      <h3>Logo</h3>

      <div className="flex py-2 px-4 gap-4 border-2 rounded-2xl w-1/3">
        <p className="text-blue-400 w-1/6">Search Icon</p>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
          className="focus:outline-none w-5/6"
        />
      </div>

      <div className="rounded-full bg-blue-400 p-5"></div>
    </nav>
  );
};
