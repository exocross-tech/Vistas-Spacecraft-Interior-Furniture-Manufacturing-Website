import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VISTA | Precision Industrial Furniture Craft",
  description:
    "VISTA - Interior furniture manufacturing company specializing in precision CNC routing, edge banding, laser engraving, and hydraulic press lamination. Crafting excellence in every detail.",
  keywords: [
    "furniture manufacturing",
    "CNC routing",
    "industrial furniture",
    "edge banding",
    "laser engraving",
    "precision cutting",
    "interior furniture",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
