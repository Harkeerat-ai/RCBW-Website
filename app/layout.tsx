import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RCBW — Rotaract Club of Bombay West",
    template: "%s | RCBW",
  },
  description:
    "Rise Above Yourself — Rotaract Club of Bombay West is a youth-led community of changemakers under Rotary International, dedicated to service, leadership, and fellowship in Mumbai.",
  keywords: [
    "Rotaract",
    "Bombay West",
    "RCBW",
    "Rotary International",
    "youth service",
    "Mumbai",
    "community service",
    "leadership",
  ],
  openGraph: {
    title: "RCBW — Rotaract Club of Bombay West",
    description:
      "Rise Above Yourself — A youth-led community of changemakers in Mumbai.",
    type: "website",
    locale: "en_IN",
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
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body
        className="min-h-screen flex flex-col noise"
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
