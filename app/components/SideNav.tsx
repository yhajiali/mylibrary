import React from "react";
import Link from "next/link";

export const SideNav = () => {
  return (
    <aside className="-translate-x-full transition-transform duration-300 lg:translate-x-0 flex-col justify-between fixed w-56 h-screen p-4 border-r">
      <div className="flex flex-col gap-4 p-2 items-center">
        <Link href="/" className="">
          Nav Link
        </Link>
        <Link href="/" className="">
          Nav Link
        </Link>
        <Link href="/" className="">
          Nav Link
        </Link>
      </div>
    </aside>
  );
};
