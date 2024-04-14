import Link from "next/link";
import React from "react";
import { IoBookSharp } from "react-icons/io5";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1">
      <IoBookSharp className="text-blue-500" />
      <h3>
        my<span className="font-semibold">Library</span>
      </h3>
    </Link>
  );
};

export default Logo;
