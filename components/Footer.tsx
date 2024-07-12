import React from "react";
import ButtonInput from "./ButtonInput";
import LongeAgeIcon from "./icons/LongeAgeIcon";
import Image from "next/image";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="p-[16px] md:p-[64px] bg-[#2C2C2C] flex-col text-white text-center ">
      <div className=" flex ">
        <LongeAgeIcon />
      </div>
      <div className=" flex flex-col md:flex-row mt-[40px] justify-between gap-2">
        <div className=" flex flex-col items-start">
          <p className=" text-[14px] md:text-[20px] font-bold text-left">
            Stay Connected with Us
          </p>
          <div className=" mb-[16px] flex justify-center gap-[16px] mt-[16px]">
            <button className=" rounded-full w-[36px] h-[36px] ">
              <Image
                src="/instagram.svg"
                alt="telegram"
                width={36}
                height={36}
              />
            </button>
            <button className=" rounded-full w-[36px] h-[36px]">
              <Image
                src="/facebook.svg"
                alt="telegram"
                width={36}
                height={36}
              />
            </button>
          </div>
          <div className=" ">
            <p className="text-[14px] md:text-[20px] font-bold">Contact Us</p>
          </div>
          <div className=" flex flex-row mt-[8px] md:mt-[16px] gap-[3px]">
            <button className="w-[24px] h-[24px]">
              <Image src="/email.svg" alt="" width={24} height={24} />
            </button>
            <div className=" ">
              <p className="text-[12px] md:text-[16px]">healogika@gmail.com</p>
            </div>
          </div>
          <div className=" flex flex-row mt-[8px] md:mt-[16px] gap-[3px]">
            <button className=" w-[24px] h-[24px]">
              <Image src="/wa.svg" alt="" width={24} height={24} />
            </button>
            <div className="">
              <p className="text-[12px] md:text-[16px]">0877 0022 7888</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-start gap-[16px]">
          <p className="text-[14px] md:text-[20px] font-bold">Explore</p>
          <div className=" flex flex-col md:flex-row gap-[24px] ">
            <div className=" flex flex-col  items-start gap-[24px]">
              <div className=" ">
                <p className="text-[12px] md:text-[16px]">Disease</p>
              </div>
              <div className=" ">
                <p className="text-[12px] md:text-[16px]">Food & Diet</p>
              </div>
              <div className=" ">
                <p className="text-[12px] md:text-[16px] text-wrap text-left ">
                  Vitamins & Supplemen
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-[24px] items-start">
              <div className=" gap-[24px]">
                <p className="text-[12px] md:text-[16px] ">Aging</p>
              </div>
              <div className=" ">
                <p className="text-[12px] md:text-[16px] ">Collagen</p>
              </div>
              <div className=" ">
                <p className="text-[12px] md:text-[16px] text-start ">
                  Biological Age
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-start">
          <p className="text-[14px] font-bold md:text-[20px] mb-[8px] md:mb-[24px]">
            Terms & Conditions
          </p>
          <div className=" ">
            <p className="text-[14px] font-bold md:text-[20px] mb-[8px] md:mb-[28px] text-left">
              Privacy Policy
            </p>
            <div className=" mt-[28px] ">
              <p className="text-[12px] md:text-[16px] mb-[8px] md:mb-[12px] text-start ">
                Discover the secret to Lifelong & Youthful Body
              </p>
            </div>
            <div className=" flex flex-row  gap-[12px] items-center justify-center ">
              <div className="bg-white  text-[40px] w-full flex items-center justify-center mt-[16px] py-[4px] rounded-full object-cover overflow-hidden ">
                <input
                  type="text"
                  className="bg-white text-black text-[12px] rounded-full flex  focus:outline-none w-full p-2 gap-2 flex-none"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="w-1/2 bg-white flex items-center justify-center mt-[16px] py-[4px] rounded-full object-cover overflow-hidden ">
                {/* <ButtonInput title="Sign Me Up" isBtnLupIcon={false} /> */}
                {/* <input
                  type="text"
                  className="bg-white text-black text-[12px] rounded-full flex  focus:outline-none w-full p-2 gap-2 flex-none"
                  placeholder="Enter your email address"
                /> */}
                <Button
                  title="Sign me up"
                  className="bg-white text-black text-[14px] rounded-full flex  focus:outline-none w-full p-2 gap-2 flex-none justify-center text-nowrap"
                />
                {/* <button className="bg-white text-black text-[14px] mt-[16px] py-[4px] rounded-full  md:flex justify-center items-center text-nowrap ">
                  Sign me up
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
