import React, { Component, SVGProps } from "react";

interface DownIconTypes extends SVGProps<SVGSVGElement> {
  className?: string;
}

const DownIcon = ({ className = "", ...rest }: DownIconTypes) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.99992 0.333344C3.32413 0.333344 0.333252 3.32422 0.333252 7.00001C0.333252 10.6758 3.32413 13.6667 6.99992 13.6667C10.6757 13.6667 13.6666 10.6758 13.6666 7.00001C13.6666 3.32422 10.6757 0.333344 6.99992 0.333344ZM6.99992 12.9649C3.7108 12.9649 1.03501 10.2891 1.03501 7.00001C1.03501 3.71089 3.7108 1.0351 6.99992 1.0351C10.289 1.0351 12.9648 3.71089 12.9648 7.00001C12.9648 10.2891 10.289 12.9649 6.99992 12.9649ZM9.35361 6.04983C9.49045 6.18667 9.49045 6.40915 9.35361 6.54599L7.24834 8.65126C7.17957 8.72003 7.08974 8.75371 6.99992 8.75371C6.91009 8.75371 6.82027 8.71933 6.75149 8.65126L4.64623 6.54599C4.50939 6.40915 4.50939 6.18667 4.64623 6.04983C4.78307 5.91299 5.00555 5.91299 5.14239 6.04983L6.99923 7.90667L8.85607 6.04983C8.99432 5.91299 9.21606 5.91299 9.35361 6.04983Z"
        fill="white"
      />
    </svg>
  );
};

export default DownIcon;