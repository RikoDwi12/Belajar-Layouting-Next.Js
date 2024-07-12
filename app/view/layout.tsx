import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="bg-white pt-[28px]">{children}</div>;
}
