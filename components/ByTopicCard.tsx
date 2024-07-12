import React from "react";

interface CardByopicProps {
  imgUrl: string;
  date: string;
  title: string;
  desc: string;
}

export default function ByTopicCard(data: CardByopicProps) {
  return (
    <div className=" flex flex-row gap-2 mt-[24px]">
      <img
        src={data.imgUrl}
        alt="gambar"
        className="w-[172px] h-[148px] flex flex-none rounded-2xl object-cover overflow-hidden"
      />
      <div className="">
        <p className="text-[#9B9B9B] text-[10px] lg:text-[14px]">{data.date}</p>
        <p className="text-[16px] lg:text-[20px] text-black font-bold">
          {data.title}
        </p>
        <p className="text-[10px] lg:text-[16px] text-black">{data.desc}</p>
      </div>
    </div>
  );
}
