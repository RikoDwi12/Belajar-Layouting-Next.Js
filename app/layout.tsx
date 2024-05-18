import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "INI BAGIAN META DATA TITTLE",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="p-4 bg-gray-800 text-white text-center">
          Header
        </header>
        {children}
        <footer className="p-4 bg-gray-800 text-white text-center">
          Footer
        </footer>
      </body>
    </html>
  );
}

import React from "react";
