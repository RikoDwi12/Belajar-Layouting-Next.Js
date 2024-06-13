import React from "react";

interface ButtonProps {
  title: string;
  className?: string;
}

export default function Button(data: ButtonProps) {
  return <button className={`${data.className} `}>{data.title}</button>;
}
