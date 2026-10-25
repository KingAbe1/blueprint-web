import type { Metadata } from "next";
import { IBM_Plex_Sans, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { FaviconSync } from "@/components/FaviconSync";
import { FaqJsonLd } from "@/components/FaqJsonLd";
import { SoftwareApplicationJsonLd } from "@/components/SoftwareApplicationJsonLd";
import { ThemeInitScript } from "./theme-init";
import {
  BRAND_ICON_PATH,
  BRAND_NAME,
  OG_IMAGE_ALT,
  OG_IMAGE_URL,
  SITE_DESCRIPTION,
  SITE_TITLE,
  SITE_URL,
} from "@/constants/site";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: BRAND_NAME,
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE_URL],
  },
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  verification: {
    google: "rN4aLc9n7pHoeUQHVh6V3uJNZr2roNaYb45Y41Qs-Y4",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: BRAND_ICON_PATH, type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${syne.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <SoftwareApplicationJsonLd />
        <FaqJsonLd />
        <ThemeInitScript />
        <FaviconSync />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
