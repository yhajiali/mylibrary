"use client";

import React from "react";
import Link from "next/link";
import ProfilePic from "./ui/ProfilePic";
// Icons
import {
  MapIcon,
  FireIcon,
  ForwardIcon,
  CheckCircleIcon,
  PencilSquareIcon,
  AdjustmentsHorizontalIcon,
  Squares2X2Icon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import { IoLibraryOutline } from "react-icons/io5";

interface Props {
  openSideNav: boolean;
}

export const SideNav = ({ openSideNav }: Props) => {
  return (
    <aside
      className={`${
        !openSideNav && "-translate-x-full"
      } transition-transform duration-300 lg:translate-x-0 flex-col justify-between fixed w-60 h-screen border-r  bg-white`}
    >
      <nav className="flex flex-col gap-4 h-full py-4">
        <ul className="flex flex-col mb-2">
          <li className="px-4 py-1 font-semibold text-sm text-gray-500">
            For You
          </li>
          <li className="px-4 py-1 hover:bg-gray-200">
            <Link href={"/"} className="flex gap-3 items-center">
              <span className="size-5">
                <ProfilePic />
              </span>
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
                <BookOpenIcon className="size-5" />
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
                <IoLibraryOutline className="size-5" />
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
