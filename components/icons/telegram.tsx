import React, { Component, SVGProps } from "react";

interface TelegramIconTypes extends SVGProps<SVGSVGElement> {
  className?: string;
}

const TelegramIcon = ({ className = "", ...rest }: TelegramIconTypes) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM9.98333 17.0417C10.2509 17.0417 10.3731 16.9226 10.5209 16.7788L10.5333 16.7667L11.8546 15.4819L14.6033 17.5127C15.1092 17.7918 15.4743 17.6473 15.6003 17.0431L17.4048 8.53981C17.5895 7.79912 17.1224 7.46318 16.6385 7.68289L6.04272 11.7686C5.31946 12.0587 5.32368 12.4622 5.91089 12.642L8.63 13.4906L14.925 9.51918C15.2222 9.33897 15.4949 9.43586 15.2711 9.63453L10.1706 14.2373L10.1705 14.2373L10.1705 14.2374L10.1703 14.2376L10.1705 14.2377L9.98333 17.0417Z"
        fill="#F9F9F9"
      />
    </svg>
  );
};

export default TelegramIcon;
