// export default function Layout({ children }: { children: React.ReactNode }) {
//   return <div className="flex bg-red-600">{children}</div>;
// }

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="bg-yellow-500">{children}</main>
    </div>
  );
}
