import React, { Component, SVGProps } from "react";

interface BurgerIconTypes extends SVGProps<SVGSVGElement> {
  className?: string;
}

const BurgerIcon = ({ className = "", ...rest }: BurgerIconTypes) => {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0.533333C0 0.238933 0.235789 0 0.526316 0H14.2105C14.5011 0 14.7368 0.238933 14.7368 0.533333C14.7368 0.827733 14.5011 1.06667 14.2105 1.06667H0.526316C0.235789 1.06667 0 0.827733 0 0.533333ZM19.4737 7.46667H0.526316C0.235789 7.46667 0 7.7056 0 8C0 8.2944 0.235789 8.53333 0.526316 8.53333H19.4737C19.7642 8.53333 20 8.2944 20 8C20 7.7056 19.7642 7.46667 19.4737 7.46667ZM10 14.9333H0.526316C0.235789 14.9333 0 15.1723 0 15.4667C0 15.7611 0.235789 16 0.526316 16H10C10.2905 16 10.5263 15.7611 10.5263 15.4667C10.5263 15.1723 10.2905 14.9333 10 14.9333Z"
        fill="white"
      />
    </svg>
  );
};

export default BurgerIcon;
