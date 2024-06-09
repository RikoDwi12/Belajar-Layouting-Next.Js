import Image from "next/image";
import React from "react";
interface CardProps {
  date: string;
  tittle: string;
  desc: string;
  imgUrl: string;
  className?: string;
}
export default function Card(data: CardProps) {
  return (
    <div
      className={`${data.className} flex flex-col  object-cover overflow-hidden`}
    >
      <div className="bg-white w-full h-[92px] md:h-[160px] flex rounded-2xl  overflow-hidden">
        <Image
          src={data.imgUrl}
          alt="Picture of the author"
          width={308}
          height={160}
          className="object-cover w-full h-full"
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
