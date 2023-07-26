"use client";
import React from "react";
import { ModeToggle } from "./themeToggler";
import { MobileNav } from "../mobileNav";
import { LanguageSwitcher } from "./langSwitcher";

type Props = {};

const Toggler = (props: Props) => {
  return (
    <div className="flex">
      <ModeToggle />
      {/* <LanguageSwitcher /> */}
      {/* <MobileNav /> */}
    </div>
  );
};

export default Toggler;
