import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";

/**
 * Type system (substitutes for Rise's licensed faces):
 *  - Fraunces  -> "PP Eiko" high-contrast display serif (headlines, logo, quotes)
 *  - Inter     -> "ABC Diatype" neutral grotesque (UI, body, labels)
 */
const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://userise.co"),
  title: {
    default: "Rise — Make it unreal",
    template: "%s — Rise",
  },
  description:
    "Rise is a team of technical and design specialists HQ'd in sunny Lisbon. We build intelligently to rise you beyond the ordinary — design, development, AI & agents, growth & GEO.",
  keywords: [
    "Rise",
    "product design",
    "development",
    "AI agents",
    "GEO",
    "Lisbon studio",
    "design subscription",
  ],
  openGraph: {
    title: "Rise — Make it unreal",
    description:
      "Clearer thinking, sharper execution, real impact. Your AI-fueled design, development & growth subscription.",
    type: "website",
    locale: "en_US",
    siteName: "Rise",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-page text-ink font-sans">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
