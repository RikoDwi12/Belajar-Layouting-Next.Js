import React from "react";

interface CardByopicProps {
  imgUrl: string;
  date: string;
  title: string;
  desc: string;
}

export default function ByTopicCard(data: CardByopicProps) {
  return (
    <div className="bg-green-700 w-1/2 flex flex-row gap-2">
      <div className="bg-red-700 w-1/3">
        <img
          src={data.imgUrl}
          alt="gambar"
          className="w-[84px] lg:w-full h-[84px] lg:h-[155px] rounded-2xl object-cover overflow-hidden"
          style={{ aspectRatio: "466 / 292" }}
        />
      </div>
      <div className="bg-gray-700 w-2/3 gap-[8px]">
        <p className="text-[#9B9B9B] text-[10px] lg:text-[14px]">{data.date}</p>
        <p className="text-[16px] lg:text-[20px] text-black font-bold">
          {data.title}
        </p>
        <p className="text-[10px] lg:text-[16px] text-black">{data.desc}</p>
      </div>
    </div>
  );
}
