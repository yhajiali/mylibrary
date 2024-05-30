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
      } transition-transform duration-300 lg:translate-x-0 fixed w-60 h-[95vh] border-r bg-white py-7`}
    >
      <nav className="flex flex-col justify-between gap-20 h-full">
        <section className="flex flex-col gap-4">
          {sideNavLinks.mainSection.map((section) => (
            <ul className="flex flex-col" key={section.title}>
              <h3 className="px-4 py-1 font-semibold text-sm text-gray-500">
                {section.title}
              </h3>

              {section.links.map((link) => (
                <li
                  className={`px-4 py-1 hover:bg-gray-200 ${
                    pathname === link.href && "bg-gray-200"
                  }`}
                  key={link.href}
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
        </section>

        <section>
          <ul className="flex flex-col">
            {sideNavLinks.resourcesSection.map((link) => (
              <li
                className={`px-4 py-1 hover:bg-gray-200 ${
                  pathname === link.href && "bg-gray-200"
                }`}
                key={link.href}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  className="flex gap-3 items-center"
                >
                  <figure className="inline-flex items-center justify-center">
                    <link.icon className="size-5" />
                  </figure>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </nav>
    </aside>
  );
};
