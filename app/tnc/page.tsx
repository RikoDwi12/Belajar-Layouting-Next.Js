"use client";

export default function Page() {
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
          Terms&Conditions
        </a>
      </div>
      {/* <!-- wrap main --> */}
      <div className="bg-white flex  flex-col lg:flex-row  gap-4  ">
        <div className="pl-[162px] lg:block hidden">
          {/* <!-- div border pp tnc --> */}
          <div className="flex flex-col w-[308px] h-[116px] justify-center px-[24px] shadow-lg rounded-2xl object-cover overflow-hidden gap-[12px]">
            {/* <p className="text-[#9B9B9B] cursor-pointer">Privacy Policy</p> */}
            <a href="/pp" className="text-[#9B9B9B] cursor-pointer">
              Privacy Policy
            </a>
            <hr />
            <a href="/tnc" className="text-black font-extrabold cursor-pointer">
              Terms & Conditions
            </a>
            {/* <p className="text-black font-extrabold cursor-pointer">
              Terms & Conditions
            </p> */}
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

        {/* <!-- wrap content --> */}
        <div className=" w-full lg:w-3/5 grid grid-cols-1 gap-[24px] text-black px-[16px] lg:px-0 my-[15px] mt-0">
          <div className="text-[20px] lg:text-[36px] font-extrabold  ">
            Terms & Conditions
          </div>
          <div className="">
            <p className="text-[16px] lg:text-[24px] font-extrabold">
              Title with one Line
            </p>
            <p className="text-[12px] lg:text-[16px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="">
            <p className="text-[16px] lg:text-[24px] font-extrabold">
              Title with one Line
            </p>
            <p className="text-[12px] lg:text-[16px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="pb-[24px]">
            <p className="text-[16px] lg:text-[24px] font-extrabold">
              Title with one Line
            </p>
            <p className="text-[12px] lg:text-[16px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
