import Button from "@/components/Button";
import ButtonInput from "@/components/ButtonInput";
import Card from "@/components/Card";
import Image from "next/image";
import { Input } from "postcss";
import React from "react";

export default function page() {
  return (
    <>
      {/* INI DIV BG LONGEVITY */}
      <div className="bg-[url('/bgsm.png')]  md:bg-[url('/bg1.png')]  w-full h-[calc(100vh-72px)] bg-right-bottom sm:bg-bottom bg-cover">
        <div className=" flex w-5/12 h-full items-center text-black flex-none pb-[150px] md:pb-[10px]">
          <div className=" mt-0 pl-[16px] md:pl-[64px] ">
            <h1 className="text-[20px] lg:text-[48px] font-bold text-nowrap">
              Longevity in Aging
            </h1>
            <p className="text-[32px] lg:text-[56px] font-extrabold text-nowrap">
              LIVE MORE
            </p>
            <p className="text-[12px] lg:text-[16px] mb-[32px] md:mb-[50px]">
              Revolutionizing how aging is slowed and treated or even reversed
              in human skin cells
            </p>
            <p className="text-[10px] lg:text-[16px] mb-[8px]">
              Discover the secret to Lifelong & Youthful Body
            </p>
            <div className=" bg-[#F1F1F1] rounded-full overflow-hidden w-full lg:w-3/5 mb-[5px]">
              <input
                type="text"
                className="bg-[#F1F1F1] text-black text-[12px] rounded-full flex  focus:outline-none w-full p-2 gap-2 flex-none"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <Button
                title="Sign me"
                className="bg-[#2C2C2C] text-white font-bold  px-2 rounded-full flex-none "
              />
            </div>
          </div>
        </div>
      </div>
      {/* WRAP AGAR PX SAMA */}
      <div className="bg-white flex flex-col px-[16px] lg:px-[163px]">
        {/* WRAP OUR PRODUCT */}
        {/* <div className="bg-white w-full h-[408px] flex flex-col justify-center gap-[24px]  ">
          <div className="bg-white flex-flex-row items-center ">
            <div className="text-[40px] font-bold text-black justify-center items-center">
              Our Product
            </div>
          </div>
          <div className="flex flex-row bg-white gap-[24px] justify-center items-center">
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
            <Card
              date="April, 19, 2023"
              desc="Salmon is one of the mast ini desc"
              tittle="ini tittle ansdasdad"
              imgUrl="/artikel1.webp"
            />
          </div>
        </div> */}
        <div className="bg-white w-full  flex flex-col ">
          {/*  RECENT UPDATE YANG BARU*/}
          <div className=" mt-[80px]">
            <h1 className="text-[20px] lg:text-[40px] font-bold text-black mb-[12px] lg:mb-[24px]">
              Recent Updates
            </h1>
          </div>
          <div className=" flex flex-col lg:flex-row gap-[24px]">
            <div className=" h-[280px] lg:h-auto w-full lg:w-1/2">
              <img
                src="/explore2.webp"
                alt="Picture of the author"
                className="w-full h-full rounded-2xl object-cover overflow-hidden "
              />
            </div>
            <div className=" w-full lg:w-1/2 text-black">
              <p className="text-[10px] lg:text-[16px]">May 8, 2023</p>
              <h1 className="text-[20px] lg:text-[36px] font-bold">
                The Benefits of Music for People with Alzheimer’s or Dementia
              </h1>
              <p className="text-[14px] lg:text-[20px]">
                Music therapy and other musical activities may help reduce
                Alzheimer’s symptoms.
              </p>
            </div>
          </div>
          <div className=" pt-[24px] flex flex-row gap-[16px] justify-between items-center ">
            <Card
              date="April, 19, 2023"
              title="Healt Start with the Mind"
              desc="Mental and physical healt are linded closely interconnected"
              imgUrl="/artikel1.webp"
            />
            <Card
              date="April, 19, 2023"
              title="Healt Start with the Mind"
              desc="Mental and physical healt are linded closely interconnected"
              imgUrl="/artikel1.webp"
            />
            <Card
              date="April, 19, 2023"
              title="Healt Start with the Mind"
              desc="Mental and physical healt are linded closely interconnected"
              imgUrl="/artikel1.webp"
            />
          </div>
        </div>
        {/* INI WHO WE ARE */}
        <div className=" flex flex-col-reverse lg:flex-row my-[80px] ">
          <div className=" w-full lg:w-1/2 flex flex-col justify-center items-start gap-2 text-black">
            <div className=" text-[20px] lg:text-[36px] font-bold">
              Who We Are
            </div>
            <hr />
            <div className=" text-[12px] lg:text-[16px] ">
              LongeAge was born from curiosity-driven exploration with the
              potential to delay aging and extend life span. We are a longevity
              tech startup based in Indonesia with a transformative platform of
              longevity and age that will serve as the scaffold for everything
              from regenerative and genomic information to biological test kits.
              We currently provide a website, multimedia materials and articles
              in the field of health, wellness, fitness, and happiness for
              entertainment and educational purposes.
            </div>
          </div>
          <div className=" w-full h-[280px] lg:h-auto lg:w-1/2 mb-[16px] lg:mb-0">
            <img
              src="/home6.png"
              alt="Picture of the author"
              className="w-full h-full rounded-2xl object-cover overflow-hidden "
            />
          </div>
        </div>
      </div>
      {/* DIV OUR MISSION */}

      <div className="bg-[url('/m2sm.png')] md:bg-[url('/svgsvg.svg')] w-full h-[720px] flex flex-col justify-end items-start bg-left-top sm:bg-center bg-cover ">
        {/* <div className="bg-red-300 w-1/2 lg:w-full flex justify-center justify-items-start  text-wrap flex-col ">
          <h1 className="text-[32px] md:text-[40px] lg:text-[46px] font-bold text-nowrap bg-red-600 w-full">
            Our Mission
          </h1>
          <hr className="bg-white" />
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-wrap bg-cyan-400">
            We are committed to increase public awareness in maintaining and
            life spans
          </p>
        </div> */}
      </div>
      <div className="bg-white w-full  flex flex-col">
        <div className="bg-white flex flex-col gap-[42px] px-[16px] lg:px-[162px] mt-[80px]">
          {/* Elderly people will make up 22% of population by 2050 */}

          <div>
            <h1 className="text-[20px] lg:text-[40px] text-black text-center font-extrabold">
              Elderly people will make up 22% of population by 2050
            </h1>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/homepage3.png"
              alt="Picture of the author"
              width={916}
              height={379}
              className="max-w-full "
            />
          </div>

          {/* <!-- A process which increases the proportion of old --> */}

          <div>
            <p className="text-[10px] lg:text-[20px] text-black text-center">
              A process which increases the proportion of old people within the
              total population, known as Population Aging, is one of the main
              problems of this century. It affects or will affect both developed
              and developing countries.
            </p>
          </div>
        </div>
        <div className="bg-white flex flex-col justify-center items-center gap-[16px] mt-[80px] mb-[80px] px-[16px] lg:px-[162px]">
          {/* INI DIV GAMBAR KE 2 */}
          <div className="flex justify-center items-center">
            <Image
              src="/homepage4.png"
              alt="Picture of the author"
              layout="responsive"
              width={757}
              height={306}
              className="max-w-full "
            />
          </div>
          {/* <!-- The aging process is natural process --> */}
          <div>
            <p className="text-[14px] lg:text-[20px] text-center text-black">
              The aging process is a natural process characterized by a decrease
              or change in physical, psychological and social conditions in
              interacting with others. According to WHO, between 2015 and 2050,
              the proportion of the worlds population over 60 years will nearly
              double from 12% to 22%.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- David A. Sinclair, Ph.D --> */}
      <div className="bg-[url('/bg5sm.png')] md:bg-[url('/homepage5.svg')] w-full h-[630px] md:h-[536px] bg-cover object-center ">
        <div className=" flex flex-col w-full lg:w-4/12 h-full pl-[16px] lg:pl-[64px] gap-[16px] justify-end pb-[36px]  lg:justify-center ">
          <p className="text-white text-[14px] lg:text-[20px]">
            “I believe that aging is a disease. I believe it is treatable. I
            believe we can treat it within our lifetimes. And in doing so, I
            believe, everything we know about human health will be fundamentally
            changed.”
          </p>
          <p className="text-white text-[14px] lg:text-[20px] font-extrabold">
            David A. Sinclair, Ph.D
          </p>
        </div>
      </div>
    </>
  );
}
