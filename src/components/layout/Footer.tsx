"use client";

import { Button } from "@/components/common/Button";
import { Svg } from "@/components/common/Svg";
import { socialIcons } from "@/components/Icons";

interface NavigationLink {
  name: string;
  href: string;
}

const FOOTER_LINKS: NavigationLink[] = [
  { name: "Terms of service", href: "/terms-of-service" },
  { name: "Privacy policy", href: "/privacy-policy" },
  { name: "License", href: "/license" },
  { name: "RSS Feed", href: "/feed.xml" },
];

export function Footer() {
  const year: number = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-950">
      <div className="space-y-6 mx-auto max-w-7xl overflow-hidden pt-10 pb-5">
        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {FOOTER_LINKS.map((item) => (
            <Button
              variant="link"
              key={item.name}
              href={item.href}
              className="font-normal"
            >
              {item.name}
            </Button>
          ))}
        </nav>

        <div className="flex justify-center gap-x-6">
          {socialIcons.map((item) => (
            <Button
              variant="ghost"
              key={item.name}
              href={item.href}
              aria-label={`Visit ${item.name}`}
              className="size-10"
              rounded
            >
              <Svg width={24} height={24} draw={[item.path]} />
            </Button>
          ))}
        </div>

        <p className="text-center text-sm/6 text-gray-700 dark:text-gray-300">
          &copy; {year} Rizky Ramadhan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
