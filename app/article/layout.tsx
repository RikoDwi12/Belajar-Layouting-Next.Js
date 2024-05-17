import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-slate-600">
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="p-4 bg-slate-800 w-full h-[72px] flex items-center justify-between">
            {/* Bagian kiri header */}
            <div className="flex items-center">
              <h1 className="text-white text-right">Header</h1>
            </div>

            {/* Bagian kanan header */}
            <div className="flex items-center">
              <span className="text-white mr-4 cursor-pointer">INI</span>
              <span className="text-white mr-4 cursor-pointer">APA</span>
              <span className="text-white mr-4 cursor-pointer">INIS</span>
              <span className="text-white mr-4 cursor-pointer">APAS</span>
              <button className="bg-sky-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
              </button>
            </div>
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
