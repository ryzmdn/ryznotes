"use client";

import { ReactNode } from "react";
import { Footer, Header } from "@/components/layout";
import { ThemeProvider } from "@/providers";

export function Provider({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Header />
      <main className="mx-auto max-w-6xl w-full px-6 lg:px-8">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
