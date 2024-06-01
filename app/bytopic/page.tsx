import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="flex bg-red-600 w-full h-[436px] justify-center items-center">
        <div className="bg-yellow-500 flex flex-col">
          <p className="text-[48px] pb-[28px] px-[358px] text-center">
            ini paragaraf
          </p>
          <p className="text-[32px] px-[162px] text-center">ini paragaraf</p>
        </div>
      </div>
      <div className="bg-blue-700 w-full h-[612px]">
        <div className="flex flex-row bg-green-600 px-[162px] justify-center items-center">
          <p>INI JUDUL LAGI</p>
        </div>
        <div className="bg-amber-950 w-full h-[612px] flex flex-col">
          <div className="bg-blue-400 flex flex-row justify-center w-full ">
            <div className="bg-yellow-500 flex flex-col ">
              <div className="bg-white w-[200px] h-[200px]">
                <Image
                  src="/ekplor.webp"
                  alt="Picture of the author"
                  width={308}
                  height={268}
                />
              </div>
              <div className="bg-green-400">ini merah</div>
              <div className="bg-red-800">ini merah</div>
            </div>
            <div className="bg-purple-600 flex flex-col">
              <div className="bg-red-600 w-[100px] h-[100px]">ini merahs</div>
              <div className="bg-amber-950 w-[100px] h-[100px]">ini merahs</div>
              <div className="bg-green-600 w-[100px] h-[100px]">ini merahs</div>
            </div>
            <div className="bg-black flex flex-col">
              <div className="bg-yellow-400 flex flex-col w-[100px] h-[100px]">
                <div className="bg-red-600 flex">JUDUL</div>
                <div className="bg-slate-600 flex">tulisan</div>
              </div>
              <div className="bg-amber-800 w-[100px] h-[100px] flex flex-col">
                <div className="bg-red-600 flex">JUDUL</div>
                <div className="bg-slate-700 flex">Tulisan</div>
              </div>
              <div className="bg-red-600 w-[100px] h-[100px] flex flex-col">
                <div className="bg-red-600 flex">JUDUL</div>
                <div className="bg-slate-800 flex ">TULISANN</div>
              </div>
            </div>
          </div>
          <div className="bg-slate-950 ">ini judul</div>
          <div className="bg-yellow-400 flex flex-row gap-4 justify-center items-center flex-wrap px-[162px] pt-[4px] pb-[4px]">
            <div className="bg-blue-800 w-[172px] h-[148px] mr-[2px]">
              ini merah
            </div>
            <div className="bg-green-950 w-[282px] h-[142px] mr-[40px]">
              <p className="text-[24px]">ini judul</p>
              <p className="text-[24px]">ini descs</p>
            </div>
            <div className="bg-purple-950 w-[172px] h-[148px]">ini merah</div>
            <div className="bg-red-700 w-[282px] h-[142px]">
              <p className="text-[24px]">ini judul</p>
              <p className="text-[24px]">ini desc</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
