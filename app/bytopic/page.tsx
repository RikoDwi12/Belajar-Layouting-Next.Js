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
      <div className="bg-white ">
        {/* Wrap Cotent px */}
        <div className=" mx-[162px] h-full">
          {/* Wrap Cotent px */}
          <div className=" flex justify-between pt-[80px] pb-[24px]">
            <h1 className="text-black font-bold text-[40px] ">
              Recent Updates
            </h1>
            <div className="text-[#9B9B9B]">View All</div>
          </div>
          {/* gambar kiri */}
          <div className=" flex flex-row gap-[24px]">
            <div className="w-1/2 flex flex-col gap-[16px] text-black">
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
            <div className="bg-red-300 w-1/2 gap-2">
              <div className="bg-yellow-300 flex flex-row gap-2">
                <img
                  src="/Rectangle.jpg"
                  alt="gambar"
                  className="w-auto h-[148px] rounded-2xl object-cover overflow-hidden"
                  style={{ aspectRatio: "466 / 292" }}
                />
                <div className="bg-green-300">
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
              <div className="bg-yellow-300 flex flex-row gap-2 mt-[24px]">
                <img
                  src="/Rectangle.jpg"
                  alt="gambar"
                  className="w-auto h-[148px] rounded-2xl object-cover overflow-hidden"
                  style={{ aspectRatio: "466 / 292" }}
                />
                <div className="bg-green-300">
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
            {/* Wrap gambar kanan */}
          </div>
          <div className="bg-white flex justify-between">
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
