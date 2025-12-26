"use client";

import { useState } from "react";
import { Button } from "@/components/common/Button";
import { Sidebar } from "./Sidebar";
import { Svg } from "@/components/common/Svg";
import { Search } from "@/components/Search";
import Logo from "@/assets/logo.webp";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";

interface Navigation {
  name: string;
  href: string;
}

const NAVIGATION: Navigation[] = [
  { name: "Home", href: "/" },
  { name: "Posts", href: "/blog/category/all?page=1" },
  { name: "Collections", href: "/collections" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = theme === "dark";

  return (
    <>
      <header
        id="global-header"
        className="relative w-full max-w-6xl h-max mx-auto px-6 py-5 bg-transparent border-b border-gray-200 dark:border-gray-800 lg:px-0"
      >
        <nav
          aria-label="Global Navigation"
          className="flex items-center justify-between w-full"
        >
          <Button
            variant="default"
            href="/"
            aria-label="Go to the home page"
            className="flex items-center gap-x-2.5"
          >
            <div className="relative shrink-0 size-7">
              <Image src={Logo} alt="Primary logo" fill />
            </div>
            <span className="text-2xl text-gray-950 dark:text-gray-50 font-serif">
              RyzNotes
            </span>
          </Button>

          <div className="flex items-center gap-x-8 lg:hidden">
            <Search />

            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open the sidebar"
            >
              <Svg
                variant="outline"
                width={26}
                height={26}
                draw={["M3.75 9h16.5m-16.5 6.75h16.5"]}
              />
            </Button>
          </div>

          <div className="hidden gap-x-5 items-center w-full lg:flex">
            <div className="flex flex-1 justify-end items-center gap-x-5">
              {NAVIGATION.map((item) => (
                <Button
                  variant="link"
                  key={item.name}
                  href={item.href}
                  className="text-base/6 font-normal"
                >
                  {item.name}
                </Button>
              ))}
            </div>

            <div
              aria-hidden="true"
              className="block w-px h-4 bg-gray-200 dark:bg-gray-800 rounded-full"
            />

            <div className="flex items-center gap-x-6">
              <Search />

              <DropdownMenu>
                <DropdownMenuTrigger asChild suppressHydrationWarning>
                  <Button variant="outline">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </header>

      <Sidebar
        opened={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={NAVIGATION}
        toggleTheme={toggleTheme}
        isDark={isDark}
      />
    </>
  );
}
