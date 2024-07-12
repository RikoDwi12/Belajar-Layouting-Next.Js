"use client";

import Card from "@/components/Card";
import React from "react";
import "../globals.css";
import Image from "next/image";
import Button from "@/components/Button";
export default function page() {
  return (
    <>
      {/* <!-- div nav --> */}
      <div className="bg-white  text-black hidden lg:flex mx-auto px-4 lg:px-[64px] pb-[24px] gap-2 ">
        <nav className="breadcrumb text-disabled pt-6">
          <a href="/home" className="text-[#9B9B9B]">
            Home
          </a>
          <span className="separator"> {">"} </span>
        </nav>
        <a className="active text-disabled pt-6 text-[#9B9B9B]" href="/pp">
          View All
        </a>
      </div>
      {/* div wraper pembungkus */}
      <div className=" mx-[16px] lg:mx-[162px]">
        {/* div konten */}
        <div className=" flex flex-col lg:flex-row gap-0 lg:gap-[24px]">
          {/* div konten kiri w-4/12*/}
          <div className="bg-white ">
            {/* <!-- Desktop view --> explore topic */}
            <div className="lg:block hidden">
              <div className="flex flex-col w-[308px] h-[348px] justify-center px-[24px] shadow-lg rounded-2xl object-cover overflow-hidden gap-[12px] border-[#F9F9F9]">
                <a
                  href="/pp"
                  className="text-black text-[20px] font-extrabold cursor-pointer"
                >
                  Explore Topic
                </a>
                <a
                  href="/tnc"
                  className="text-black text-[16px] font-extrabold cursor-pointer"
                >
                  Disease
                </a>
                <a
                  href="/pp"
                  className="text-[#9B9B9B] text-[16px] cursor-pointer"
                >
                  Food & Diet
                </a>
                <hr />
                <a
                  href="/pp"
                  className="text-[#9B9B9B] text-[16px] cursor-pointer"
                >
                  Vitamins & Supplement
                </a>
                <hr />
                <a
                  href="/pp"
                  className="text-[#9B9B9B] text-[16px] cursor-pointer"
                >
                  Aging
                </a>
                <hr />
                <a
                  href="/pp"
                  className="text-[#9B9B9B] text-[16px] cursor-pointer"
                >
                  Collagen
                </a>
                <hr />
                <a
                  href="/pp"
                  className="text-[#9B9B9B] text-[16px] cursor-pointer"
                >
                  Biological Age
                </a>
              </div>

              <div className="w-[308px] h-[112px] mt-[16px] object-cover overflow-hidden rounded-2xl border-[#F9F9F9] shadow-lg">
                <div className="flex flex-col gap-[16px] px-[24px]">
                  <div className="text-[20px] text-black font-extrabold pt-2">
                    Sort
                  </div>
                  <button className="bg-white border-2 border-[#F9F9F9] text-black flex items-center justify-between rounded-lg p-2 px-4">
                    <span className="text-[14px]">Newest Article</span>
                    <svg
                      className="h-5 w-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* button mobile */}
            <div className="lg:hidden flex flex-row gap-[12px] px-[16px] py-[16px] overflow-x-auto  justify-start items-center  ">
              <button
                type="button"
                onClick={() => {
                  window.location.href = "/tnc";
                }}
                className="bg-[#2C2C2C] text-white font-bold py-2 px-4 rounded-full flex-none"
              >
                Disease
              </button>
              <Button
                title="Disease"
                className="bg-[#2C2C2C] text-white font-bold py-2 px-4 rounded-full flex-none"
              />
              <Button
                title="Food & Diet"
                className="bg-[#2C2C2C] text-white font-bold py-2 px-4 rounded-full flex-none"
              />
              <Button
                title="Vitamins & Supplement"
                className="bg-[#2C2C2C] text-white font-bold py-2 px-4 rounded-full flex-none"
              />
            </div>
          </div>

          {/* div konten kanan */}
          <div className=" w-full">
            <div className=" flex flex-col">
              <div className="">
                {/* div article */}
                <h1 className="text-black font-bold text-[20px] lg:text-[36px]">
                  Article
                </h1>
              </div>
              {/* div card mb-hps*/}
              <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[8px] mb-2">
                {/* card */}
                <div className=" flex flex-row   lg:flex-col text-black gap-[16px]">
                  <img
                    src="/pp.webp"
                    alt="Picture of the author"
                    className="w-[172px] lg:w-[308px] h-[148px] flex-none rounded-2xl object-cover overflow-hidden"
                  />
                  <div>
                    <p className="text-[10px] lg:text-[14px] text-[#9B9B9B]">
                      April, 19, 2023
                    </p>
                    <h1 className="text-[16px] lg:text-[20px] font-bold">
                      Music therapy and other musical Activities may help reduce
                      Alzheimer’s symptomps
                    </h1>
                    <p className="text-[10px] lg:text-[16px]">
                      ini tittle ansdasdad
                    </p>
                  </div>
                </div>
                <div className=" flex flex-row   lg:flex-col text-black gap-[16px]">
                  <img
                    src="/pp.webp"
                    alt="Picture of the author"
                    className="w-[172px] lg:w-[308px] h-[148px] flex-none rounded-2xl object-cover overflow-hidden"
                  />
                  <div>
                    <p className="text-[10px] lg:text-[14px] text-[#9B9B9B]">
                      April, 19, 2023
                    </p>
                    <h1 className="text-[16px] lg:text-[20px] font-bold">
                      Music therapy and other musical Activities may help reduce
                      Alzheimer’s symptomps
                    </h1>
                    <p className="text-[10px] lg:text-[16px]">
                      ini tittle ansdasdad
                    </p>
                  </div>
                </div>
              </div>
              {/* div nomer */}
              <div className="">
                <div className="hidden lg:flex bg-white my-[16px]  flex-row gap-[8px] mb-[56px]">
                  <button className="w-[32px] h-[32px] bg-black text-white  rounded-full flex items-center justify-center">
                    1
                  </button>
                  <Button
                    title="2"
                    className="w-[32px] h-[32px] bg-[#F1F1F1] text-black  rounded-full flex items-center justify-center"
                  />
                  <Button
                    title="5"
                    className="w-[32px] h-[32px] bg-[#F1F1F1] text-black  rounded-full flex items-center justify-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
