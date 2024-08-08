"use client";
import React, { useState } from "react";
import { SideNav } from "./ui/SideNav";
import { MainNav } from "./ui/MainNav";
import { SignedIn } from "@clerk/nextjs";

const Header = () => {
  const [openSideNav, setSideNav] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50">
      <MainNav openSideNav={openSideNav} setSideNav={setSideNav} />
      <SignedIn>
        <SideNav openSideNav={openSideNav} />
      </SignedIn>
    </header>
  );
};

export default Header;
