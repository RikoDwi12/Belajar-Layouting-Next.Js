import ExploreCard from "@/components/ExploreCard";
import Image from "next/image";

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
          Explore
        </a>
      </div>

      {/* <!-- wrap main --> */}
      <div className=" w-full">
        {/* <!-- wrap pembungkus --> */}
        <div className=" mx-[16px] lg:mx-[162px]">
          <div className=" flex justify-start lg:justify-center text-black text-[20px] lg:text-[36px] font-bold">
            Explore Topic
          </div>
          {/* <!-- warp card --> */}
          <div className=" grid grid-cols-2 lg:grid-cols-3 py-4 gap-[16px]">
            <div className="relative w-full h-64 rounded-2xl overflow-hidden">
              <Image
                src="/explore5.webp"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 p-2 text-[16px] lg:text-[24px] text-white font-bold">
                Disease
              </div>
            </div>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden">
              <Image
                src="/AAAA.webp"
                alt="Picture of the author"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 p-2 text-[16px] lg:text-[24px] text-white font-bold">
                Food & Diet
              </div>
            </div>
            <ExploreCard
              imgUrl="/explore2.webp"
              title="Disease"
              className="text-black"
            />
          </div>
        </div>
      </div>
    </>
  );
}
