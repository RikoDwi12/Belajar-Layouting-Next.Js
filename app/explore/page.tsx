import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="bg-white w-full h-[648px]">
        <div className="bg-red-600">
          <p>ini nanti tulisan Home explore</p>
        </div>
        <div className="flex flex-row bg-yellow-600 justify-center items-center ">
          <p className="text-[36px] font-bold ">EXPLORE TOPIC</p>
        </div>
        <div className="flex flex-row bg-slate-600 justify-center items-center gap-4 px-[162px] py-[24px] flex-wrap">
          <div className="bg-red-600 w-[308px] h-[268px] rounded-2xl flex justify-center object-cover overflow-hidden">
            <Image
              src="/ekplor.webp"
              alt="Picture of the author"
              width={308}
              height={268}
            />
          </div>
          <div className="bg-yellow-500 w-[308px] h-[268px] rounded-2xl">
            ini kuning
          </div>
          <div className="bg-blue-400 w-[308px] h-[268px] rounded-2xl">
            ini biru
          </div>
          <div className="bg-green-400 w-[308px] h-[268px] rounded-2xl">
            ini biru
          </div>
          <div className="bg-red-400 w-[308px] h-[268px] rounded-2xl">
            ini biru
          </div>
          <div className="bg-purple-800 w-[308px] h-[268px] rounded-2xl">
            ini biru
          </div>
        </div>
      </div>
    </>
  );
}
