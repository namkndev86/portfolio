import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.role}`,
  description: SITE_CONFIG.bio,
  keywords: ["Software Architect", "Fullstack Engineer", "Next.js", "TypeScript", "Microservices", "React"],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.role}`,
    description: SITE_CONFIG.bio,
    siteName: SITE_CONFIG.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-[#0b0f19] text-slate-100 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
