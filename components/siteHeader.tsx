"use client";

import Image from "next/image";
import React from "react";
import { NavigationMenuDemo } from "./navbar/nav";
import Link from "next/link";
import Toggler from "./navbar/toggler";

type Props = {};

const SiteHeader = (props: Props) => {
  return (
    <header className=" sticky z-50 top-0 w-full bg-opacity-30 border-b bg-background backdrop-blur  ">
      <div className="container flex h-14 px-0 items-center justify-between bg-opacity-25">
        <NavigationMenuDemo />
        <Toggler />
      </div>
    </header>
  );
};

export default SiteHeader;
