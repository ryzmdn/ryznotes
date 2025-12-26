import { ReactNode } from "react";
import type { Metadata } from "next";
import { Fira_Code, Merriweather, Montserrat } from "next/font/google";
import { Provider } from "@/app/provider";
import { cn } from "@/lib/utils";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  SEO_KEYWORDS,
  OPEN_GRAPH_IMAGES,
  TWITTER_IMAGES,
  AUTHOR_NAME,
  AUTHOR_SOCIAL,
} from "@/constants";
import "@/app/globals.css";

// Safe fallback for SITE_URL during build
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const monsterrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-serif",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s - ${SITE_NAME}`,
    default: `${SITE_NAME} | Personal Blog of Rizky Ramadhan`,
  },
  description: SITE_DESCRIPTION,
  generator: "Next.js",
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  keywords: SEO_KEYWORDS,
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  creator: AUTHOR_NAME,
  publisher: AUTHOR_NAME,
  manifest: `${SITE_URL}/site.webmanifest`,
  category: "Technology & Programming",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "id-ID": "/id-ID",
    },
  },
  openGraph: {
    title: `${SITE_NAME} | Personal Blog of Rizky Ramadhan`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}${OPEN_GRAPH_IMAGES.LIGHT}`,
        width: 800,
        height: 600,
        alt: "RyzNotes - Personal Blog Open Graph",
        type: "image/jpeg",
      },
      {
        url: `${SITE_URL}${OPEN_GRAPH_IMAGES.DARK}`,
        width: 1800,
        height: 1600,
        alt: "RyzNotes - Personal Blog Dark Theme",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Personal Blog`,
    description: SITE_DESCRIPTION,
    creator: AUTHOR_SOCIAL,
    creatorId: AUTHOR_SOCIAL,
    images: [
      `${SITE_URL}${TWITTER_IMAGES.LIGHT}`,
      `${SITE_URL}${TWITTER_IMAGES.DARK}`,
    ],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nocache: false,
    noimageindex: false,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          monsterrat.className,
          merriweather.variable,
          firaCode.variable,
          "antialiased size-full bg-background"
        )}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
