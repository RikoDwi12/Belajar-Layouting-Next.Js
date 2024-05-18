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
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import React from "react";

// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header */}
//       <header className="p-4 bg-gray-800 text-white text-center">
//         <h1>Header</h1>
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow bg-white p-4">{children}</main>

//       {/* Footer */}
//       <footer className="p-4 bg-gray-800 text-white text-center">
//         <h1>Footer</h1>
//       </footer>
//     </div>
//   );
// }

// components/Layout.tsx
