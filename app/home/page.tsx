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
        <div className=" flex w-5/12 h-full items-center text-black pb-[150px] md:pb-[10px] ">
          <div className=" mt-0 pl-[16px] md:pl-[64px]">
            <p className="text-[20px] lg:text-[48px] font-bold text-nowrap">
              Longevity in Aging
            </p>
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
            <div className=" bg-[#F1F1F1] rounded-full overflow-hidden w-full lg:w-3/5">
              {/* <ButtonInput
                title="Sign me"
                isBtnLupIcon={false}
                className="bg-[#F1F1F1] text-black  "
              /> */}
              <input
                type="email"
                placeholder="Enter your email "
                className="w-full h-8 lg:h-10 focus:outline-none bg-[#F1F1F1] "
              />
            </div>
            <div>
              <button className="bg-[#F1F1F1] text-black text-[14px] mt-[16px] py-[4px] rounded-full  md:flex justify-center items-center text-nowrap w-1/4 ">
                Sign Me
              </button>
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
          {/*  RECENT UPDATE */}

          <div className="bg-white mt-[80px]">
            <p className="text-[20px] lg:text-[40px] font-bold text-black mb-[12px] lg:mb-[24px]">
              Recent Updates
            </p>
          </div>
          <div className="bg-white flex flex-col  lg:flex-row gap-[24px]">
            <div className="bg-white object-cover overflow-hidden rounded-2xl">
              <Image
                src="/explore2.webp"
                alt="Picture of the author"
                width={466}
                height={292}
                className="w-full h-full"
              />
            </div>
            <div className="bg-white flex flex-col gap-[16px]">
              <div className="bg-white">
                <p className="text-[10px] lg:text-[16px] text-black">
                  May 8, 2023
                </p>
              </div>
              <div className="bg-white">
                <p className="text-[20px] lg:text-[36px] font-bold text-wrap text-black">
                  The Benefits of Music for People with Alzheimer’s or Dementia
                </p>
              </div>
              <div className="bg-white">
                <p className="text-[14px] lg:text-[20px] text-black">
                  Music therapy and other musical activities may help reduce
                  Alzheimer’s symptoms.
                </p>
              </div>
            </div>
          </div>
          {/* ini card */}

          <div className="bg-white flex flex-row gap-[16px] justify-center items-center mt-[40px]  ">
            <Card
              date="April, 19, 2023"
              desc="Salmon is one of the mast ini desc"
              tittle="ini tittle ansdasdad"
              imgUrl="/artikel1.webp"
              className="w--[308px] h-full"
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
        </div>
        {/* INI WHO WE ARE */}

        <div className="bg-white w-full  flex flex-col-reverse lg:flex-row my-[80px]">
          <div className="bg-white flex flex-col  justify-center ">
            <div className="bg-white ">
              <p className="text-[20px] lg:text-[36px] font-bold text-black">
                Who We Are
              </p>
            </div>

            {/* LongeAge was born from curiosity-driven exploration with the */}
            <div className="bg-white mt-[16px] lg:mt-[24px] w-full lg:w-2/3 ">
              <p className="text-[12px] lg:text-[16px] text-black">
                LongeAge was born from curiosity-driven exploration with the
                potential to delay aging and extend life span. We are a
                longevity tech startup based in Indonesia with a transformative
                platform of longevity and age that will serve as the scaffold
                for everything from regenerative and genomic information to
                biological test kits. We currently provide a website, multimedia
                materials and articles in the field of health, wellness,
                fitness, and happiness for entertainment and educational
                purposes.
              </p>
            </div>
          </div>

          <div className="bg-white flex justify-center items-center  rounded-2xl object-cover overflow-hidden mb-[16px] lg:mb-0 ">
            <Image
              src="/explore2.webp"
              alt="Picture of the author"
              width={466}
              height={292}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* INI DIV OUR MISSION */}

      <div className="bg-[url('/m2sm.png')] md:bg-[url('/svgsvg.svg')] w-full h-[720px] flex flex-col  pt-[361px] bg-left-top sm:bg-center bg-cover ">
        <div className=" w-1/2 lg:w-full flex justify-center justify-items-start pl-[17px] lg:pl-[700px] pr-[130px] lg:pr-[200px]  text-wrap flex-col ">
          <h1 className="text-[32px] md:text-[40px] lg:text-[46px] font-bold text-nowrap ">
            Our Mission
          </h1>
          <hr className="bg-white" />
          <p className="text-[16px] md:text-[18px] lg:text-[20px] text-wrap">
            We are committed to increase public awareness in maintaining and
            life spans
          </p>
        </div>
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
