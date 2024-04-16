import React from "react";
import Link from "next/link";
import {
  MapIcon,
  FireIcon,
  ForwardIcon,
  BookmarkIcon,
  CheckCircleIcon,
  BuildingLibraryIcon,
  PencilIcon,
  PencilSquareIcon,
  CogIcon,
  AdjustmentsHorizontalIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

export const SideNav = () => {
  return (
    <aside className="-translate-x-full transition-transform duration-300 lg:translate-x-0 flex-col justify-between fixed w-60 h-screen border-r">
      <nav className="flex flex-col gap-4 h-full py-4">
        <ul className="flex flex-col mb-2">
          <li className="px-4 py-1 font-semibold text-sm text-gray-500">
            For You
          </li>
          <li className="px-4 py-1 hover:bg-gray-200">
            <Link href={"/"} className="flex gap-3 items-center">
              <span className="size-5  bg-blue-400 rounded-md"></span>
              <span>My Feed</span>
            </Link>
          </li>
          <li className="px-4 py-1 hover:bg-gray-200">
            <Link href={"/"} className="flex gap-3 items-center">
              <span>
                <MapIcon className="size-5" />
              </span>
              <span>Explore</span>
            </Link>
          </li>
          <li className="px-4 py-1 hover:bg-gray-200">
            <Link href={"/"} className="flex gap-3 items-center">
              <span>
                <FireIcon className="size-5" />
              </span>
              <span>Popular</span>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col mb-2">
          <li className="px-4 py-1 font-semibold text-sm text-gray-500">
            Library
          </li>
          <li className="px-4 py-1 hover:bg-gray-200">
            <Link href={"/"} className="flex gap-3 items-center">
              <span>
                <BookmarkIcon className="size-5" />
              </span>
              <span>Currently Reading</span>
            </Link>
          </li>
          <li className="px-4 py-1 hover:bg-gray-200">
            <Link href={"/"} className="flex gap-3 items-center">
              <span>
                <ForwardIcon className="size-5" />
              </span>
              <span>Up Next</span>
            </Link>
          </li>
          <li className="px-4 py-1 hover:bg-gray-200">
            <Link href={"/"} className="flex gap-3 items-center">
              <span>
                <CheckCircleIcon className="size-5" />
              </span>
              <span>Finished</span>
            </Link>
          </li>
          <li className="px-4 py-1 hover:bg-gray-200">
            <Link href={"/"} className="flex gap-3 items-center">
              <span>
                <BuildingLibraryIcon className="size-5" />
              </span>
              <span>Bookshelf</span>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col mb-2">
          <li className="px-4 py-1 font-semibold text-sm text-gray-500">
            Manage
          </li>
          <li className="px-4 py-1 hover:bg-gray-200">
            <Link href={"/"} className="flex gap-3 items-center">
              <span>
                <Squares2X2Icon className="size-5" />
              </span>
              <span>My Reading Summary</span>
            </Link>
          </li>
          <li className="px-4 py-1 hover:bg-gray-200">
            <Link href={"/"} className="flex gap-3 items-center">
              <span>
                <PencilSquareIcon className="size-5" />
              </span>
              <span>Master Database</span>
            </Link>
          </li>

          <li className="px-4 py-1 hover:bg-gray-200">
            <Link href={"/"} className="flex gap-3 items-center">
              <span>
                <AdjustmentsHorizontalIcon className="size-5" />
              </span>
              <span>Customize</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
