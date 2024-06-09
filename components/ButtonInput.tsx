import React from "react";
import LupIcon from "./icons/LupIcon";

interface ButtonInputProps {
  title: string;
  isBtnLupIcon: boolean;
  className?: string;
}
export default function ButtonInput(data: ButtonInputProps) {
  return (
    <div className="flex items-center  p-2 rounded-md gap-2">
      <button>{data.isBtnLupIcon ? <LupIcon className="h-3" /> : null}</button>
      <input
        type="text"
        className="bg-white text-black text-[12px] rounded-full flex flex-grow-0 focus:outline-none w-full "
        placeholder={data.title}
      />
    </div>
  );
}

// import React from "react";
// import LupIcon from "./icons/LupIcon";

// interface ButtonInputProps {
//   title: string;
//   isBtnLupIcon: boolean;
//   className?: string;
// }

// export default function ButtonInput({
//   title,
//   isBtnLupIcon,
//   className,
// }: ButtonInputProps) {
//   return (
//     <div
//       className={`flex items-center p-2 rounded-md gap-2 ${
//         className ? className : ""
//       }`}
//     >
//       <button>{isBtnLupIcon ? <LupIcon className="h-3" /> : null}</button>
//       <input
//         type="text"
//         className="bg-white text-black text-[12px] rounded-full flex flex-grow-0 focus:outline-none w-full"
//         placeholder={title}
//       />
//     </div>
//   );
// }
