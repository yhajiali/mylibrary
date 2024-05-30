"use client";
import React, { useState } from "react";
import { SideNav } from "./ui/SideNav";
import { MainNav } from "./ui/MainNav";

type Props = {};

const Header = ({}: Props) => {
  const [openSideNav, setSideNav] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50">
      <MainNav openSideNav={openSideNav} setSideNav={setSideNav} />
      <SideNav openSideNav={openSideNav} />
    </header>
  );
};

export default Header;
