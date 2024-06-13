import Card from "@/components/Card";
import React from "react";

export default function page() {
  return (
    <>
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
      <div className="bg-red-600 flex flex-row">
        <div className="bg-green-500  ">
          <div className="pl-[162px] lg:block hidden">
            {/* <!-- div border pp tnc --> */}
            <div className="bg-fuchsia-600 flex flex-col w-[308px] h-[348px] justify-center px-[24px] shadow-lg rounded-2xl object-cover overflow-hidden gap-[12px]">
              <a href="/pp" className="text-[#9B9B9B] cursor-pointer">
                Privacy Policy
              </a>
              <hr />
              <a
                href="/tnc"
                className="text-black font-extrabold cursor-pointer"
              >
                Terms & Conditions
              </a>
              <a href="/pp" className="text-[#9B9B9B] cursor-pointer">
                Privacy Policy
              </a>
              <hr />
              <a href="/pp" className="text-[#9B9B9B] cursor-pointer">
                Privacy Policy
              </a>
              <hr />
              <a href="/pp" className="text-[#9B9B9B] cursor-pointer">
                Privacy Policy
              </a>
              <hr />
              <a href="/pp" className="text-[#9B9B9B] cursor-pointer">
                Privacy Policy
              </a>
              <hr />
              <a href="/pp" className="text-[#9B9B9B] cursor-pointer">
                Privacy Policy
              </a>
              <hr />
              {/* <p className="text-black font-extrabold cursor-pointer">
              Terms & Conditions
            </p> */}
            </div>
          </div>
        </div>
        <div className="bg-gray-600 w-3/5 flex flex-col">
          <div className="bg-green-900 text-[36px] font-bold text-black">
            Article
          </div>
          <div className="bg-blue-700 flex flex-row gap-[8px]">
            <Card
              date="April, 19, 2023"
              desc="Salmon is one of the mast ini desc"
              tittle="ini tittle ansdasdad"
              imgUrl="/artikel1.webp"
            />
            <Card
              date="April, 19, 2023"
              desc="Salmon is one of the mast ini desc"
              tittle="ini tittle ansdasdad"
              imgUrl="/artikel1.webp"
            />
            <Card
              date="April, 19, 2023"
              desc="Salmon is one of the mast ini desc"
              tittle="ini tittle ansdasdad"
              imgUrl="/artikel1.webp"
            />
          </div>
          <div className="bg-purple-900">Artikel</div>
        </div>
      </div>
      {/* <div className="bg-yellow-500">1</div> */}
    </>
  );
}
