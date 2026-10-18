import type { Metadata } from "next";
import { IBM_Plex_Sans, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { FaviconSync } from "@/components/FaviconSync";
import { SoftwareApplicationJsonLd } from "@/components/SoftwareApplicationJsonLd";
import { ThemeInitScript } from "./theme-init";
import { BRAND_ICON_PATH, BRAND_NAME, HERO_SCREENSHOT_PATH, SITE_URL } from "@/constants/site";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const siteDescription =
  "Plan architecture, scan local codebases, and export agent handoffs. Local-first, MIT open source.";

export const metadata: Metadata = {
  title: `${BRAND_NAME} · Build on solid ground`,
  description: siteDescription,
  openGraph: {
    type: "website",
    title: `${BRAND_NAME} · Build on solid ground`,
    description: siteDescription,
    url: SITE_URL,
    siteName: BRAND_NAME,
    images: [
      {
        url: HERO_SCREENSHOT_PATH,
        width: 3024,
        height: 1964,
        alt: `${BRAND_NAME} app screenshot`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} · Build on solid ground`,
    description: siteDescription,
    images: [HERO_SCREENSHOT_PATH],
  },
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  icons: {
    icon: BRAND_ICON_PATH,
    apple: BRAND_ICON_PATH,
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
