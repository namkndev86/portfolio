import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio Platform | Enterprise Showcase",
  description: "A production-grade, highly scalable developer Portfolio Platform sits behind Nginx and NestJS.",
  keywords: ["NestJS", "Next.js", "React Three Fiber", "Docker", "DevOps"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-background-primary text-text-main">
        {children}
      </body>
    </html>
  );
}
