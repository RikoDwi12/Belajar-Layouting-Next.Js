import React from "react";

interface ButtonProps {
  title: string;
  className?: string;
}
const Button = (data: ButtonProps) => {
  return <button className={`${data.className}`}>{data.title}</button>;
};

export default Button;
