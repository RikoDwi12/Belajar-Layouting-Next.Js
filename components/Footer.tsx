import React from "react";
import ButtonInput from "./ButtonInput";
import LongeAgeIcon from "./icons/LongeAgeIcon";

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
            <button className=" rounded-full w-[24px] h-[24px] ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM9.98333 17.0417C10.2509 17.0417 10.3731 16.9226 10.5209 16.7788L10.5333 16.7667L11.8546 15.4819L14.6033 17.5127C15.1092 17.7918 15.4743 17.6473 15.6003 17.0431L17.4048 8.53981C17.5895 7.79912 17.1224 7.46318 16.6385 7.68289L6.04272 11.7686C5.31946 12.0587 5.32368 12.4622 5.91089 12.642L8.63 13.4906L14.925 9.51918C15.2222 9.33897 15.4949 9.43586 15.2711 9.63453L10.1706 14.2373L10.1705 14.2373L10.1705 14.2374L10.1703 14.2376L10.1705 14.2377L9.98333 17.0417Z"
                  fill="#F9F9F9"
                />
              </svg>
            </button>
            <button className="bg-blue-600 rounded-full w-[24px] h-[24px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM9.98333 17.0417C10.2509 17.0417 10.3731 16.9226 10.5209 16.7788L10.5333 16.7667L11.8546 15.4819L14.6033 17.5127C15.1092 17.7918 15.4743 17.6473 15.6003 17.0431L17.4048 8.53981C17.5895 7.79912 17.1224 7.46318 16.6385 7.68289L6.04272 11.7686C5.31946 12.0587 5.32368 12.4622 5.91089 12.642L8.63 13.4906L14.925 9.51918C15.2222 9.33897 15.4949 9.43586 15.2711 9.63453L10.1706 14.2373L10.1705 14.2373L10.1705 14.2374L10.1703 14.2376L10.1705 14.2377L9.98333 17.0417Z"
                  fill="#F9F9F9"
                />
              </svg>
            </button>
          </div>
          <div className=" ">
            <p className="text-[14px] md:text-[20px] font-bold">Contact Us</p>
          </div>
          <div className=" flex flex-row mt-[8px] md:mt-[16px] gap-[3px]">
            <button className="bg-blue-600 rounded-full w-[24px] h-[24px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM9.98333 17.0417C10.2509 17.0417 10.3731 16.9226 10.5209 16.7788L10.5333 16.7667L11.8546 15.4819L14.6033 17.5127C15.1092 17.7918 15.4743 17.6473 15.6003 17.0431L17.4048 8.53981C17.5895 7.79912 17.1224 7.46318 16.6385 7.68289L6.04272 11.7686C5.31946 12.0587 5.32368 12.4622 5.91089 12.642L8.63 13.4906L14.925 9.51918C15.2222 9.33897 15.4949 9.43586 15.2711 9.63453L10.1706 14.2373L10.1705 14.2373L10.1705 14.2374L10.1703 14.2376L10.1705 14.2377L9.98333 17.0417Z"
                  fill="#F9F9F9"
                />
              </svg>
            </button>
            <div className=" ">
              <p className="text-[12px] md:text-[16px]">healogika@gmail.com</p>
            </div>
          </div>
          <div className=" flex flex-row mt-[8px] md:mt-[16px] gap-[3px]">
            <button className="bg-blue-600 rounded-full w-[24px] h-[24px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM9.98333 17.0417C10.2509 17.0417 10.3731 16.9226 10.5209 16.7788L10.5333 16.7667L11.8546 15.4819L14.6033 17.5127C15.1092 17.7918 15.4743 17.6473 15.6003 17.0431L17.4048 8.53981C17.5895 7.79912 17.1224 7.46318 16.6385 7.68289L6.04272 11.7686C5.31946 12.0587 5.32368 12.4622 5.91089 12.642L8.63 13.4906L14.925 9.51918C15.2222 9.33897 15.4949 9.43586 15.2711 9.63453L10.1706 14.2373L10.1705 14.2373L10.1705 14.2374L10.1703 14.2376L10.1705 14.2377L9.98333 17.0417Z"
                  fill="#F9F9F9"
                />
              </svg>
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
                <ButtonInput
                  title="Enter your email address"
                  isBtnLupIcon={false}
                />
              </div>
              {/* <div className="">
                <input
                  type="text"
                  className="bg-white text-black text-[14px] rounded-full flex flex-grow-0 focus:outline-none mt-[16px] py-[4px]"
                  placeholder="Enter your email address"
                />
              </div> */}
              <div className="w-1/2 bg-white flex items-center justify-center mt-[16px] py-[4px] rounded-full object-cover overflow-hidden ">
                <ButtonInput title="Sign Me Up" isBtnLupIcon={false} />
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
