"use client";

import React from "react";
import Link from "next/link";
import { sideNavLinks } from "../../../lib/links";
import { usePathname } from "next/navigation";

interface Props {
  openSideNav: boolean;
}

export const SideNav = ({ openSideNav }: Props) => {
  const pathname = usePathname();
  return (
    <aside
      className={`${
        !openSideNav && "-translate-x-full"
      } transition-transform duration-300 lg:translate-x-0 flex-col justify-between fixed w-60 h-screen border-r bg-white`}
    >
      <nav className="flex flex-col gap-4 h-full py-4">
        {sideNavLinks.map((navSection) => (
          <ul className="flex flex-col">
            <h3 className="px-4 py-1 font-semibold text-sm text-gray-500">
              {navSection.title}
            </h3>

            {navSection.links.map((link) => (
              <li
                className={`px-4 py-1 hover:bg-gray-200 ${
                  pathname === link.href && "bg-gray-200"
                }`}
              >
                <Link href={link.href} className="flex gap-3 items-center">
                  <figure className="size-5 inline-flex items-center justify-center">
                    <link.icon />
                  </figure>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </nav>
    </aside>
  );
};
