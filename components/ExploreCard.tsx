import Image from "next/image";
import React from "react";

interface ExploreCardProps {
  imgUrl: string;
}
export default function ExploreCard(data: ExploreCardProps) {
  return (
    <div className="bg-red-600 rounded-2xl flex justify-center object-cover overflow-hidden ">
      <Image
        src={data.imgUrl}
        alt="Picture of the author"
        width={308}
        height={268}
        className="w-full h-full"
      />
    </div>
  );
}
