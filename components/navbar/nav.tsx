"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Moon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SiteConfig } from "@/config/config";

export function NavigationMenuDemo() {
  return (
    <div className="mr-4 md:flex bg-opacity-25 backdrop-filter backdrop-blur-lg">
      <div className="flex h-16 w-full dark align-middle justify-center mr-2">
        <Link className="self-center" href="/">
          <p className="text-4xl font-bold bg-clip-text bg-gradient-to-r text-transparent from-indigo-500 via-purple-500 to-pink-500">
            BookSeeker
          </p>
        </Link>
      </div>
      <NavigationMenu className="hidden md:flex ml-2">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Books</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/books">
                      <div className="flex align-middle self-center justify-center">
                        <Link className="flex" href="/books">
                          <Image
                            src="/hamburger.svg"
                            className="bg-clip-content bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-2xl"
                            alt="Logo"
                            height={64}
                            width={64}
                          />
                        </Link>
                      </div>
                      <div className="mb-2 mt-4 text-lg font-medium">
                        BookSeeker
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/books/1" title="Book a">
                  ABC
                </ListItem>
                <ListItem href="/books/1" title="Book a">
                  ABC
                </ListItem>
                <ListItem href="/books/1" title="Book a">
                  ABC
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
