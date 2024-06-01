import React from "react";
import LupIcon from "./icons/LupIcon";

interface ButtonInputProps {
  tittle: string;
}
export default function ButtonInput(data: ButtonInputProps) {
  return (
    <div className="flex items-center bg-white p-2 rounded-md gap-2">
      <button className="{className}">
        <LupIcon className="h-3" />
      </button>
      <input
        type="text"
        className="bg-white text-black text-[12px] rounded-md flex flex-grow-0 focus:outline-none "
        placeholder={data.tittle}
      />
    </div>
  );
}
