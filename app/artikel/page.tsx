export default function Page() {
  return (
    <>
      <div className="flex flex-col bg-slate-600 w-full h-[648px] p-10 justify-center items-center ">
        <div className="bg-green-800 p-10">
          <p className="text-[48px] text-center">
            Salmon Nutrition and Health Benefits
          </p>
          <p className="text-[20px] text-center">
            Updated on April 19, 2023 by Franziska Splitzer
          </p>
          <div className="flex bg-black justify-center item-center">
            DISINI BOTTOM SOSMED
          </div>
        </div>
        <div className="bg-red-600 p-10 mt-[72px]">
          <p className="text-center text-[10px] sm:text-[5px] md:text-[15px] lg:text-[20px]">
            Salmon is one of the most nutritious foods on the planet. This
            popular fatty fish is not only loaded with nutrients but also may
            reduce certain risk factors for several diseases. What’s more, it’s
            tasty, versatile, and widely available. This article will explore
            some of the key benefits of salmon, along with a few easy ways to
            add it to your diet.
          </p>
        </div>
      </div>
      <div className="flex flex-col bg-green-800 w-full px-[162px] pt-[80px] pb-[36px]">
        <div className="bg-red-600">
          <p className="text-[36px] font-bold">Salmon Health Benefits</p>
          <p className="text-[32px]">Rich in omega-3 fatty acids</p>
          <p className="text-[20px]">
            Salmon is one of the best sources of the long-chain omega-3 fatty
            acids eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA). A
            3.5-ounce (100-gram) portion of farmed salmon has 2.3 grams of
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
          <button className="bg-[#F1F1F1] text-[#9B9B9B] px-[16px] py-[4px] rounded-full ">
            read more
          </button>
        </div>
        <div className="flex flex-col bg-slate-200">
          <div className="bg-white-600">
            <p className="text-[36px]">You might also like</p>
          </div>
          <div className="flex flex-row bg-green-600 justify-center items-center mt-[12px] gap-[16px]">
            <div className="flex flex-col bg-red-600 w-[308px]">
              <div className="bg-white w-full h-[160px]">afladsn</div>
              <div className="bg-black">
                <p className="text-[20px] font-bold">
                  The Benefits of Music for People with Alzheimer’s
                </p>
              </div>
              <div className="bg-slate-600">
                <p className="text-[16px]">
                  Music therapy and other musical Activities may help reduce
                  Alzheimer’s symptomps.
                </p>
              </div>
            </div>
            <div className="flex flex-col bg-red-600 w-[308px]">
              <div className="bg-white w-full h-[160px]">afladsn</div>
              <div className="bg-black">
                <p className="text-[20px] font-bold">
                  The Benefits of Music for People with Alzheimer’s
                </p>
              </div>
              <div className="bg-slate-600">
                <p className="text-[16px]">
                  Music therapy and other musical Activities may help reduce
                  Alzheimer’s symptomps.
                </p>
              </div>
            </div>
            <div className="flex flex-col bg-red-600 w-[308px]">
              <div className="bg-white w-full h-[160px]">afladsn</div>
              <div className="bg-black">
                <p className="text-[20px] font-bold">
                  The Benefits of Music for People with Alzheimer’s
                </p>
              </div>
              <div className="bg-slate-600">
                <p className="text-[16px]">
                  Music therapy and other musical Activities may help reduce
                  Alzheimer’s symptomps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
