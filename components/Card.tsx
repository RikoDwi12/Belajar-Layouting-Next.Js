import Image from "next/image";
import React from "react";
interface CardProps {
  date: string;
  title: string;
  desc: string;
  imgUrl: string;
  className?: string;
}
export default function Card(data: CardProps) {
  return (
    <div className=" flex flex-col w-[309px] text-black">
      <img
        src={data.imgUrl}
        alt="Picture of the author"
        className="w-full lg:w-[309px] h-auto lg:h-[160px] rounded-2xl object-cover overflow-hidden"
      />
      <div className="">
        <p className="text-[12px] lg:text-[14px] text-[#9B9B9B]">{data.date}</p>
        <h1 className="text-[16px] lg:text-[20px] font-bold">{data.title}</h1>
        <p className="text-[12px] lg:text-[16px]">{data.desc}</p>
      </div>
    </div>
  );
}
