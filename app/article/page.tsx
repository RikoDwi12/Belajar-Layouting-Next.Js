// import Article from "@/components/Article";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Image from "next/image";

export default function Page() {
  return (
    <>
      {/* Salmon Nutritionand Health Benefits */}
      <div className="bg-[url('/bgpp.svg')] flex flex-col bg-slate-600 w-full h-[308px]  lg:h-[calc(100vh-72px)] p-10 justify-center items-center sm:p-4 md:p-6 lg:p-8 no-warp bg-cover">
        <div className="">
          <p className=" text-center font-bold text-[20px] lg:text-[48px] ">
            Ini merupakan judul artikel
          </p>
          <p className="text-center mt-[16px] mb-[8px] lg:mb-[24px] text-[12px] lg:text-[20px]">
            Ini Deskripsinya
          </p>
          {/* baris icon */}
          <div className="flex  justify-center item-center gap-[4px] md:gap-[8px] mt-[9px] lg:mt-[24px]">
            <button className=" rounded-full">
              <Image
                src="/telegram.svg"
                alt="telegram"
                width={22}
                height={22}
              />
            </button>
            <button className=" rounded-full">
              <Image
                src="/facebook.svg"
                alt="telegram"
                width={22}
                height={22}
              />
            </button>
            <button className=" rounded-full">
              <Image src="/twitter.svg" alt="telegram" width={22} height={22} />
            </button>
            <button className=" rounded-full ">
              <Image
                src="/linkedin.svg"
                alt="telegram"
                width={22}
                height={22}
              />
            </button>
            <button className=" rounded-full">
              <Image src="/email.svg" alt="telegram" width={22} height={22} />
            </button>
          </div>
        </div>
        <div className=" mt-[32px] lg:mt-[72px] ">
          <p className="text-center text-[12px] lg:text-[20px]">
            Salmon is one of the most nutritious foods on the planet. This
            popular fatty fish is not only loaded with nutrients but also may
            reduce certain risk factors for several diseases. What’s more, it’s
            tasty, versatile, and widely available. This article will explore
            some of the key benefits of salmon, along with a few easy ways to
            add it to your diet.
          </p>
        </div>
      </div>

      {/* wrap pembungkus */}
      <div className="bg-white px-[16px] lg:px-[162px] pt-[24px] lg:pt-[80px]">
        {/* Salmon Health Benefits kontent-2 */}
        <div className="bg-white">
          <p className="text-[20px] lg:text-[36px] font-bold text-black mb-[4px] lg:mb-[16px]">
            Salmon Health Benefits
          </p>
          <p className="text-[16px] lg:text-[32px] text-black">
            Rich in omega-3 fatty acids
          </p>
          <p className="text-[12px] lg:text-[20px] text-black">
            Salmon is one of the best sources of the long-chain omega-3 fatty
            acids eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA). A
            3.5-ounce (100-gram) portion of farmed samd::salmon has 2.3 grams of
            long-chain omega-3 fatty acids, while the same portion of wild
            salmon contains 2.2 grams. Unlike most other fats, omega-3 fats are
            considered “essential,” meaning you must get them from your diet
            since your body cannot create them. Generally, most health
            organizations recommend that healthy adults get a minimum of
            250–1,000 mg of combined EPA and DHA per day. EPA and DHA have been
            credited with several impressive health benefits, such as decreasing
            inflammation, lowering blood pressure, reducing the risk of cancer,
            and improving the function of the cells that line your arteries.
          </p>
          <div className="pt-[16px]">
            <Button
              title="Read More"
              className="bg-[#F1F1F1] text-gray-500  px-2 rounded-full flex-none "
            />
          </div>
        </div>
        {/*  You might also like kontent-3 */}
        <div className="bg-white flex flex-col py-[24px] lg:py-[80px]">
          <div className="bg-white">
            <h1 className="text-[20px] lg:text-[36px] text-black font-bold text-proximanova">
              You might also like
            </h1>
          </div>
          {/* div card */}
          <div className=" flex flex-row justify-between items-center mt-[12px] gap-[8px] md:gap-[16px] ">
            <Card
              date="April, 19, 2023"
              desc="Salmon is one of the mast ini desc"
              title="ini tittle ansdasdad"
              imgUrl="/artikel1.webp"
            />
            <Card
              date="April, 19, 2023"
              desc="Salmon is one of the mast ini desc"
              title="ini tittle ansdasdad"
              imgUrl="/artikel1.webp"
            />
            <Card
              date="April, 19, 2023"
              desc="Salmon is one of the mast ini desc"
              title="ini tittle ansdasdad"
              imgUrl="/artikel1.webp"
            />
            <Card
              date="April, 19, 2023"
              desc="Salmon is one of the mast ini desc"
              title="ini tittle ansdasdad"
              imgUrl="/artikel1.webp"
            />
          </div>
        </div>
      </div>
    </>
  );
}
