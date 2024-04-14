import React from "react";
import Link from "next/link";

export const SideNav = () => {
  return (
    <aside className="hidden lg:flex fixed w-56 min-h-screen p-4 border-r">
      <ul className="flex flex-col gap-4 p-2 items-center">
        <Link href="/" className="">
          Nav Link
        </Link>
        <Link href="/" className="">
          Nav Link
        </Link>
        <Link href="/" className="">
          Nav Link
        </Link>
      </ul>
    </aside>
  );
};
