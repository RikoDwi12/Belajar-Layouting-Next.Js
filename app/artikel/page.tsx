import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="flex flex-col bg-slate-600 w-full h-[648px] p-10 justify-center items-center ">
        {/* <Image
          className="w-full h-full"
          src="/bg.png"
          alt="salmon"
          width={400}
          height={400}
        /> */}
        <div className="bg-green-800 p-10">
          <p className="text-[48px] text-center">
            Salmon Nutrition and Health Benefits
          </p>
          <p className="text-[20px] text-center">
            Updated on April 19, 2023 by Franziska Splitzer
          </p>
          <div className="flex bg-white justify-center item-center gap-[8px]">
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
            <button className="bg-blue-600 rounded-full">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM12.1466 11.4832V17.4678H9.67043V11.4834H8.43336V9.42109H9.67043V8.18288C9.67043 6.50045 10.369 5.5 12.3536 5.5H14.0058V7.56255H12.973C12.2005 7.56255 12.1494 7.85076 12.1494 8.38865L12.1466 9.42086H14.0175L13.7986 11.4832H12.1466Z"
                  fill="#F9F9F9"
                />
              </svg>
            </button>
            <button className="bg-blue-600 rounded-full">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM10.6936 9.32156L10.6706 8.94094C10.6013 7.95442 11.2092 7.05335 12.1709 6.7038C12.5249 6.57951 13.125 6.56397 13.5174 6.67272C13.6713 6.71933 13.9637 6.87469 14.1714 7.01451L14.5485 7.27085L14.964 7.1388C15.1948 7.06888 15.5026 6.95237 15.6411 6.87469C15.7719 6.80478 15.8873 6.76594 15.8873 6.78924C15.8873 6.9213 15.6026 7.37183 15.3641 7.6204C15.0409 7.96996 15.1332 8.00103 15.7872 7.76799C16.1797 7.63594 16.1873 7.63594 16.1104 7.78353C16.0642 7.86121 15.8257 8.13308 15.5718 8.38165C15.1409 8.80888 15.1178 8.85549 15.1178 9.21281C15.1178 9.76433 14.8562 10.914 14.5946 11.5432C14.1099 12.7239 13.0712 13.9434 12.0324 14.5571C10.5705 15.4193 8.62387 15.6368 6.98499 15.1319C6.4387 14.961 5.5 14.526 5.5 14.4483C5.5 14.425 5.78469 14.394 6.13093 14.3862C6.85419 14.3707 7.57745 14.1687 8.193 13.8114L8.60849 13.5628L8.13144 13.3997C7.45435 13.1666 6.8465 12.6307 6.69261 12.1258C6.64645 11.9626 6.66184 11.9549 7.09271 11.9549L7.53898 11.9471L7.16196 11.7684C6.71569 11.5432 6.3079 11.1625 6.10785 10.7742C5.96166 10.4945 5.77699 9.78763 5.83085 9.73326C5.84624 9.70996 6.00782 9.75656 6.19248 9.81871C6.72339 10.0129 6.79264 9.96629 6.48487 9.64004C5.9078 9.04969 5.73083 8.17192 6.00782 7.34076L6.13862 6.9679L6.64645 7.47281C7.68517 8.4904 8.90856 9.09629 10.3089 9.27496L10.6936 9.32156Z"
                  fill="#F9F9F9"
                />
              </svg>
            </button>
            <button className="bg-blue-800 rounded-full w-[24px] h-[24px]">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0ZM5.28073 9.11072H7.77357V16.6007H5.28073V9.11072ZM7.93779 6.79374C7.92161 6.05935 7.39645 5.5 6.54366 5.5C5.69088 5.5 5.13336 6.05935 5.13336 6.79374C5.13336 7.51291 5.6744 8.08837 6.5113 8.08837H6.52723C7.39645 8.08837 7.93779 7.51291 7.93779 6.79374ZM13.8935 8.93481C15.5339 8.93481 16.7637 10.0055 16.7637 12.3061L16.7636 16.6006H14.2709V12.5935C14.2709 11.587 13.9101 10.9002 13.0077 10.9002C12.319 10.9002 11.9088 11.3632 11.7286 11.8104C11.6627 11.9707 11.6466 12.194 11.6466 12.4178V16.6008H9.15342C9.15342 16.6008 9.18627 9.81371 9.15342 9.11089H11.6466V10.1718C11.9774 9.66179 12.57 8.93481 13.8935 8.93481Z"
                  fill="#F9F9F9"
                />
              </svg>
            </button>
            <button className="bg-red-600 rounded-full">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM11.1533 10.3826C10.2939 10.3826 5.86667 7.87204 5.86667 7.87204V7.48C5.86667 6.99424 6.26091 6.6 6.74755 6.6H15.559C16.0461 6.6 16.4403 6.99424 16.4403 7.48L16.4333 7.92C16.4333 7.92 12.0539 10.3826 11.1533 10.3826ZM16.4333 9.24C16.4333 9.24 12.0953 11.5926 11.1533 11.5926C10.2939 11.5926 5.87327 9.24 5.87371 9.24L5.86667 14.52C5.86667 15.0058 6.26135 15.4 6.74755 15.4H15.559C16.0461 15.4 16.4403 15.0058 16.4403 14.52L16.4333 9.24Z"
                  fill="#F9F9F9"
                />
              </svg>
            </button>
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
      <div className="flex flex-col bg-white w-full px-[162px] pt-[80px] pb-[36px]">
        <div className="bg-red-600">
          <p className="text-[36px] font-bold text-black">
            Salmon Health Benefits
          </p>
          <p className="text-[32px] text-black">Rich in omega-3 fatty acids</p>
          <p className="text-[20px] text-black">
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
            <p className="text-[36px] text-black font-bold text-proximanova">
              You might also like
            </p>
          </div>
          <div className="flex flex-row bg-green-600 justify-center items-center mt-[12px] gap-[16px]">
            <div className="flex flex-col bg-red-600 w-[308px]">
              <div className="bg-white w-full h-[160px] rounded-lg overflow-hidden">
                <Image
                  src="/Rectangle.jpg"
                  alt="Picture of the author"
                  width={308}
                  height={160}
                  className="w-[308px] h-[160px]"
                />
              </div>
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
            <div className="flex flex-col bg-yellow-400-600 w-[308px]">
              <div className="bg-white w-full h-[160px] rounded-lg overflow-hidden">
                <Image
                  src="/Image.png"
                  alt="Picture of the author"
                  width={200}
                  height={300}
                  className="w-[308px] h-[160px]"
                />
              </div>
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
            <div className="flex flex-col bg-red-600 w-[308px] rounded-2xl overflow-hidden relative">
              <div className="bg-white w-full h-[160px] rounded-2xl overflow-hidden relative">
                <Image
                  src="/foto2.png"
                  alt="Picture"
                  layout="fill"
                  objectFit="center"
                  objectPosition="center"
                  // width={308}
                  // height={160}
                  className="rounded-2xl"
                />
              </div>
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
