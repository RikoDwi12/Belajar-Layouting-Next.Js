import Image from "next/image";
import React from "react";

interface ExploreCardProps {
  imgUrl: string;
  title: string;
  className?: string;
}

export default function ExploreCard(data: ExploreCardProps) {
  return (
    <div
      className={`${data.className} relative w-full h-64 rounded-2xl overflow-hidden`}
    >
      <Image
        src={data.imgUrl}
        alt="Picture of the author"
        layout="fill"
        objectFit="cover"
        className="rounded-2xl"
      />
      <div className="absolute bottom-0 left-0 p-2 text-[16px] lg:text-[24px]  font-bold">
        {data.title}
      </div>
    </div>
  );
}
