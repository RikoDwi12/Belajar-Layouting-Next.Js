"use client";

import Card from "@/components/Card";
import React from "react";
import "../globals.css";
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
      {/* <!-- wrap pembungkus 2 content --> */}
      <div className="bg-white flex flex-col lg:flex-row">
        <div className="bg-white">
          {/* <!-- div border pp tnc --> */}
          <div className="pl-[162px] lg:block hidden">
            {/* <!-- div border pp tnc --> */}
            <div className="bg-white flex flex-col w-[308px] h-[348px] justify-center px-[24px] shadow-lg rounded-2xl object-cover overflow-hidden gap-[12px] mr-[24px] mt-[24px] border-[#F9F9F9]">
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
            <div className="bg-white w-[308px] h-[112px] mt-[16px] object-cover overflow-hidden rounded-2xl border-[#F9F9F9] shadow-lg">
              <div className=" flex flex-col gap-[16px] px-[24px] ">
                <div className=" text-[20px] text-black font-extrabold pt-2">
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
          {/* <!-- Mobile view --> */}
          <div className="lg:hidden flex flex-row items-center gap-[12px] pl-[16px] py-[16px]">
            <button
              type="button"
              onClick={() => {
                window.location.href = "/pp";
              }}
              className="bg-[#F1F1F1] text-[#9B9B9B] font-bold py-2 px-4 rounded-full "
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => {
                window.location.href = "/tnc";
              }}
              className="bg-[#2C2C2C] text-white font-bold py-2 px-4 rounded-full  "
            >
              Terms & Conditions
            </button>
          </div>
        </div>
        <div className="bg-red-600 w-auto flex flex-col ">
          <div className="bg-purple-300 text-[36px] font-bold text-black mt-[24px]">
            Article
          </div>
          <div className="bg-yellow-300 grid grid-cols-1 lg:grid-cols-2 gap-[8px]">
            <Card
              date="April, 19, 2023"
              desc="Music therapy and other musical Activities may help reduce Alzheimer’s symptomps."
              tittle="ini tittle ansdasdad"
              imgUrl="/artikel1.webp"
              className="w-[84px] lg:w-[250px] gap-2"
            />
            <Card
              date="April, 19, 2023"
              desc="Music therapy and other musical Activities may help reduce Alzheimer’s symptomps."
              tittle="ini tittle ansdasdad"
              imgUrl="/ekplor.webp"
              className="w-[84px] lg:w-[250px]"
            />
            <Card
              date="April, 19, 2023"
              desc="Music therapy and other musical Activities may help reduce Alzheimer’s symptomps."
              tittle="ini tittle ansdasdad"
              imgUrl="/artikel1.webp"
              className="w-[84px] lg:w-[250px]"
            />
            <Card
              date="April, 19, 2023"
              desc="Music therapy and other musical Activities may help reduce Alzheimer’s symptomps."
              tittle="ini tittle ansdasdad"
              imgUrl="/artikel1.webp"
              className="w-[84px] lg:w-[250px]"
            />
            <div className="bg-yellow-500">1</div>
            <div className="bg-purple-700">1</div>
          </div>
          <div className="bg-white my-[16px] flex flex-row gap-[8px] mb-[56px]">
            <button className="w-[32px] h-[32px] bg-black text-white  rounded-full flex items-center justify-center">
              1
            </button>
            <button className="w-[32px] h-[32px] bg-[#F1F1F1] text-black  rounded-full flex items-center justify-center">
              2
            </button>
            <button className="w-[32px] h-[32px] bg-[#F1F1F1] text-black  rounded-full flex items-center justify-center">
              3
            </button>
            <button className="w-[32px] h-[32px] bg-[#F1F1F1] text-black  rounded-full flex items-center justify-center">
              4
            </button>
            <button className="w-[32px] h-[32px] bg-[#F1F1F1] text-black  rounded-full flex items-center justify-center">
              5
            </button>
          </div>
        </div>
      </div>
      {/* <div className="bg-yellow-500">1</div> */}
    </>
  );
}
