import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { BRAND_NAME } from "@/constants/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${BRAND_NAME} · Build on solid ground`,
  description:
    "Plan your architecture, define testable constraints, and build dependable software with AI using blueprint studio.",
  openGraph: {
    title: `${BRAND_NAME} · Build on solid ground`,
    description:
      "Plan your architecture, define testable constraints, and build dependable software with AI using blueprint studio.",
    url: "https://blueprint-web-chi.vercel.app/",
  },
  metadataBase: new URL("https://blueprint-web-chi.vercel.app/"),
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
