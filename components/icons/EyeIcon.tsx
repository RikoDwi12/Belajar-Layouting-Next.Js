import React, { Component, SVGProps } from "react";

interface EyeIconTypes extends SVGProps<SVGSVGElement> {
  className?: string;
}

const EyeIcon = ({ className = "", ...rest }: EyeIconTypes) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5.25c-2.774 0-5.203 1.661-6.872 3.198a20.393 20.393 0 0 0-2.55 2.852 12.083 12.083 0 0 0-.185.259l-.01.016-.004.004-.274.434.273.406.001.002.003.004.011.016a6.945 6.945 0 0 0 .184.26 20.393 20.393 0 0 0 2.55 2.851c1.67 1.537 4.099 3.198 6.873 3.198s5.203-1.661 6.872-3.198a20.388 20.388 0 0 0 2.55-2.852 12.21 12.21 0 0 0 .185-.259l.01-.016.004-.004.001-.002.282-.419-.282-.42h-.001l-.003-.005-.01-.016a6.596 6.596 0 0 0-.185-.26 20.388 20.388 0 0 0-2.55-2.851C17.202 6.911 14.773 5.25 12 5.25Zm-7.71 7.216A17.629 17.629 0 0 1 3.926 12a18.901 18.901 0 0 1 2.218-2.448C7.733 8.089 9.804 6.75 12 6.75c2.196 0 4.268 1.339 5.856 2.802A18.9 18.9 0 0 1 20.074 12a18.898 18.898 0 0 1-2.219 2.448C16.269 15.911 14.197 17.25 12 17.25c-2.196 0-4.267-1.339-5.856-2.802a18.9 18.9 0 0 1-1.854-1.982ZM14.25 12a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm1.5 0a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  );
};

export default EyeIcon;
