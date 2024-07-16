// export default function Layout({ children }: { children: React.ReactNode }) {
//   return <div className="flex bg-red-600">{children}</div>;
// }

import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="bg-white pt-[28px]">{children}</div>;
}
