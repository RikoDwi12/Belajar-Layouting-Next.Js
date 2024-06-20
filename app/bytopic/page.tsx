import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      {/* Bg Food & Diet */}
      <div className="bg-[url('/bytopic.png')] h-[436px] flex justify-center items-center bg-cover">
        {/* Wrap Food & Diet */}
        <div className=" flex flex-col items-center gap-[28px] text-white">
          <h1 className="font-bold text-[48px]">Food & Diet</h1>
          <hr className="border-white w-[100px]" />
          <p className="text-[32px]">Eat Fresh Nourish Your Body</p>
        </div>
      </div>
      {/* Bg2 */}
      <div className="bg-yellow-400 ">
        {/* Wrap Cotent px */}
        <div className="bg-green-800 mx-[162px] h-full">
          {/* Wrap Cotent px */}
          <div className="bg-red-600 flex justify-between pt-[80px] pb-[24px]">
            <h1 className="text-black font-bold text-[40px] ">
              Recent Updates
            </h1>
            <div>View All</div>
          </div>
          {/* gambar kiri */}
          <div className="bg-purple-600 flex flex-row gap-[24px]">
            <div className="bg-red-950 w-1/2 flex flex-col gap-[16px] text-black">
              <Image
                src="/pp.webp"
                alt="gambar"
                width={466}
                height={292}
                className="w-full h-[320px] rounded-2xl object-cover overflow-hidden"
              />
              <p className="text-[16px] ">May 8, 2023</p>
              <p className="text-[36px]  font-bold">
                The Benefits of Music for People with Alzheimer’s or Dementia
              </p>
              <p className="text-[20px]">
                Music therapy and other musical activities may help reduce
                Alzheimer’s symptoms.
              </p>
            </div>
            {/* Wrap gambar kanan */}
            <div className="bg-green-700 w-1/2 flex flex-row gap-2">
              <div className="bg-red-700 w-1/3">
                <img
                  src="/Rectangle.jpg"
                  alt="gambar"
                  className="w-[84px] lg:w-full h-[84px] lg:h-[155px] rounded-2xl object-cover overflow-hidden"
                  style={{ aspectRatio: "466 / 292" }}
                />
              </div>
              <div className="bg-gray-700 w-2/3 gap-[8px]">
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
          </div>
          <div className="bg-zinc-800 flex justify-between">
            <h1 className="text-black font-bold text-[40px]">Editors’ Picks</h1>
            <div>View All</div>
          </div>
          <div className="bg-gray-700 flex flex-row">
            <div className="bg-red-500 w-full">1</div>
            <div className="bg-green-400 w-full">2</div>
          </div>
        </div>
      </div>
    </>
  );
}
