import ByTopicCard from "@/components/ByTopicCard";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      {/* Bg Food & Diet */}
      <div className="bg-[url('/mdd.svg')] lg:bg-[url('/bytopic.svg')] h-[436px] flex justify-center items-center bg-center bg-cover">
        {/* Wrap Food & Diet */}
        <div className=" flex flex-col items-center gap-[28px] text-white">
          <h1 className="font-bold text-[24px] lg:text-[48px]">Food & Diet</h1>
          <hr className="border-white w-[100px]" />
          <p className="text-[12px] lg:text-[32px]">
            Eat Fresh Nourish Your Body
          </p>
        </div>
      </div>
      {/* Bg2 */}
      <div className="bg-white ">
        {/* Wrap Cotent px */}
        <div className=" px-[16px] lg:px-[162px] h-full">
          {/* Wrap Cotent px */}
          <div className=" flex justify-between pt-[80px] pb-[24px]">
            <h1 className="text-black font-bold text-[40px] ">
              Recent Updates
            </h1>
            <div className="text-[#9B9B9B]">View All</div>
          </div>
          {/* gambar kiri */}
          <div className="bg-white flex flex-col lg:flex-row gap-[24px]">
            <div className="  w-full lg:w-1/2 flex flex-col gap-[16px] text-black">
              {/* <Image
                src="/pp.webp"
                alt="gambar"
                width={466}
                height={292}
                className="w-full h-[320px] flex flex-none rounded-2xl object-cover overflow-hidden"
              /> */}
              <img
                src="/pp.webp"
                alt="gambar"
                className="w-full h-[320px] flex flex-none rounded-2xl object-cover overflow-hidden"
              />
              <p className="text-[10px] lg:text-[16px] ">May 8, 2023</p>
              <p className="text-[20px] lg:text-[36px]  font-bold">
                The Benefits of Music for People with Alzheimer’s or Dementia
              </p>
              <p className="text-[14px] lg:text-[20px]">
                Music therapy and other musical activities may help reduce
                Alzheimer’s symptoms.
              </p>
            </div>
            <div className="w-full lg:w-1/2 gap-2 ">
              <div className=" flex flex-row gap-2">
                <img
                  src="/Rectangle.jpg"
                  alt="gambar"
                  className="w-[172px] h-[148px] flex flex-none rounded-2xl object-cover overflow-hidden"
                />
                <div className="">
                  <p className="text-[#9B9B9B] text-[10px] lg:text-[14px]">
                    May 8, 2023
                  </p>
                  <p className="text-[16px] lg:text-[20px] text-black font-bold">
                    The Benefits of Music for People with Alzheimer’s
                  </p>
                  <p className="text-[10px] lg:text-[16px] text-black">
                    Music therapy and other musical Activities may help reduce
                    Alzheimer’s symptomps.
                  </p>
                </div>
              </div>
              {/* INI CARD */}
              <ByTopicCard
                imgUrl="/Rectangle.jpg"
                date="May 8, 2023"
                title="The Benefits of Music for People with Alzheimer’s or Dementia"
                desc="Music therapy and other musical activities may help reduce Alzheimer’s symptoms."
              />
            </div>
          </div>
          {/* Editors’ Picks */}
          <div className="bg-white flex justify-between pt-[80px] pb-[24px]">
            <h1 className="text-black font-bold text-[40px]">Editors’ Picks</h1>
            <div className="text-slate-500">View All</div>
          </div>
          <div className=" flex flex-col lg:flex-row">
            <div className=" w-full">
              <ByTopicCard
                imgUrl="/Rectangle.jpg"
                date="May 8, 2023"
                title="The Benefits of Music for People with Alzheimer’s or Dementia"
                desc="Music therapy and other musical activities may help reduce Alzheimer’s symptoms."
              />
            </div>
            <div className=" w-full mb-[24px]">
              <ByTopicCard
                imgUrl="/Rectangle.jpg"
                date="May 8, 2023"
                title="The Benefits of Music for People with Alzheimer’s or Dementia"
                desc="Music therapy and other musical activities may help reduce Alzheimer’s symptoms."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
