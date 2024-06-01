import Image from "next/image";
import React from "react";
interface CardProps {
  date: string;
  tittle: string;
  desc: string;
  imgUrl: string;
}
export default function Card(data: CardProps) {
  return (
    <div className="flex flex-col w-[128px] md:w-[308px] object-cover overflow-hidden">
      <div className="bg-white w-full h-[92px] md:h-[160px] flex rounded-2xl  overflow-hidden">
        <Image
          src={data.imgUrl}
          alt="Picture of the author"
          width={308}
          height={268}
          className="object-cover"
        />
      </div>
      <div className=" mt-[8px] md:mt-[16px] mb-[4px] md:mb-[8px]">
        <p className="text-black text-[10px] md:text-[14px]">{data.date}</p>
      </div>
      <div className=" mb-[8px]">
        <p className="text-black text-[16px] md:text-[20px] font-bold">
          {data.tittle}
        </p>
      </div>
      <div className="">
        <p className="text-black text-[12px] md:text-[16px]">{data.desc}</p>
      </div>
    </div>
  );
}
