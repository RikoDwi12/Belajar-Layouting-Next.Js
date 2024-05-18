// export default function Layout({ children }: { children: React.ReactNode }) {
//   return <div className="flex bg-red-600">{children}</div>;
// }

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="p-4 bg-gray-800 text-white text-center">Header</header>

      {/* Main Content */}
      <main className="flex-grow bg-white-500 p-4">{children}</main>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-white text-center">Footer</footer>
    </div>
  );
}
