"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const notFound = () => {
  const router = useRouter();

  return (
    <div className="max-w-xl px-4 mx-auto flex items-center justify-start h-[85svh] md:px-8">
      <div className="max-w-lg mx-auto space-y-3 text-center">
        <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
          Page not found
        </h3>
        <p className="text-gray-600">
          Sorry, the page you are looking for could not be found or has been
          removed.
        </p>
        <Link
          href="/"
          onClick={() => router.back()}
          className="text-blue-500 duration-150 hover:text-blue-400 font-medium inline-flex items-center gap-x-1 group"
        >
          Go back
          <ArrowLongRightIcon className="size-5 group-hover:translate-x-1 transition duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default notFound;
