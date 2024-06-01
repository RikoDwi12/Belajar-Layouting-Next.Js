import ExploreCard from "@/components/ExploreCard";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="bg-white w-full h-full">
        <div className="flex flex-row p-0 md:pt-[96px] justify-between md:justify-center ">
          <p className="text-[20px] md:text-[36px] font-bold text-black text-nowrap">
            Explore Topic
          </p>
        </div>
        <div className=" grid grid-cols-2 lg:grid-cols-3 gap-[12px] lg:gap-[16px] px-[16px] lg:px-[128px] py-4">
          <ExploreCard imgUrl="/explore3.webp" />
          <ExploreCard imgUrl="/explore3.webp" />
          <ExploreCard imgUrl="/explore3.webp" />
          <div className="bg-red-600 rounded-2xl flex justify-center object-cover overflow-hidden shadow-sm">
            <Image
              src="/explore5.webp"
              alt="Picture of the author"
              width={308}
              height={268}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
