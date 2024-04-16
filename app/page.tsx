"use client";

import BookCard from "./components/ui/BookCard";
import { SideNav } from "./components/SideNav";
import { MainNav } from "./components/MainNav";
import { useState } from "react";

export default function Home() {
  const [openSideNav, setSideNav] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-10 w-full">
        <MainNav openSideNav={openSideNav} setSideNav={setSideNav} />
        <SideNav openSideNav={openSideNav} />
      </header>
      <main className="lg:pl-60 my-4 flex justify-center flex-wrap">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </main>
    </>
  );
}
