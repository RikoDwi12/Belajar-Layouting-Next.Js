import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-slate-600">
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="p-4 bg-slate-800 w-full h-[72px] flex items-center justify-center">
            <h1 className="text-white text-2xl">Header</h1>
          </header>
          {/* Main Content */}
          <main className="flex-grow p-4 bg-white-500 ">{children}</main>

          {/* Footer */}
          <footer className="p-4 bg-slate-800 w-full h-[72px] flex items-center justify-center">
            <h1 className="text-white text-2xl">Footer</h1>
          </footer>
        </div>
      </body>
    </html>
  );
};

export default Layout;
