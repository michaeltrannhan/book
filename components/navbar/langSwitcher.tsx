"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
export function LanguageSwitcher() {
  const pathName = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Languages className="w-full h-full" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        <DropdownMenuCheckboxItem checked={pathName === "/" ? true : false}>
          <Link href="/" locale="en" className="text-center">
            English
          </Link>
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={pathName.includes("ja") ? true : false}>
          <Link href="/" locale="vi">
            Vietnamese
          </Link>
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
