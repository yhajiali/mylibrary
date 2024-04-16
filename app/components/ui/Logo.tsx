import Link from "next/link";
import React from "react";
import { BookOpenIcon } from "@heroicons/react/24/solid";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1">
      <BookOpenIcon className="size-5 text-blue-500" />
      <h3>
        my<span className="font-semibold">Library</span>
      </h3>
    </Link>
  );
};

export default Logo;
