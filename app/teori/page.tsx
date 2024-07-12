"use client";
import { log } from "console";
import { useState } from "react";
import React from "react";

// ini merupakan contoh state
const Page = (props: any) => {
  const [counter, setCounter] = useState(0);

  const decrementCounter = () => {
    setCounter(counter - 1);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  // ini menggunakan if else biasa
  // let info;
  // if (counter % 2 == 0) {
  //   info = "Genap";
  // } else {
  //   info = "Ganjil";
  // }

  return (
    <>
      <div className="text-black text-[32px] text-center font-bold">
        Ini Wrap untuk latihan use state
      </div>

      {/* ini merupakan grid cols agar menjadi card */}
      <div className="grid grid-cols-4">
        {/* konten pertama */}
        <div className="bg-blue-400 w-[300px] text-center">
          ini merupakan contoh event handler
          {/* ini merupakan contoh event handler */}
          <div className=" flex flex-row justify-center gap-2">
            <button
              className="p-1 rounded-md bg-white text-black"
              onClick={decrementCounter}
            >
              -
            </button>
            <div>{counter}</div>
            {/* ini juga event handelr */}
            <button
              className="p-1 rounded-md bg-white text-black"
              onClick={incrementCounter}
            >
              +
            </button>
          </div>
          {/* ini menggunakan ternary */}
          <div className={counter % 2 === 0 ? "bg-green-600" : "bg-yellow-300"}>
            {counter % 2 === 0 ? "Genap" : "Ganjil"}
          </div>
        </div>

        {/* konten kedua */}
        <div className="bg-blue-400 w-[300px] text-center">
          ini merupakan contoh event handler
          {/* ini merupakan contoh event handler */}
          <div className=" flex flex-row justify-center gap-2">
            <button
              className="p-1 rounded-md bg-white text-black"
              onClick={decrementCounter}
            >
              -
            </button>
            <div>{counter}</div>
            {/* ini juga event handelr */}
            <button
              className="p-1 rounded-md bg-white text-black"
              onClick={incrementCounter}
            >
              +
            </button>
          </div>
          {/* ini menggunakan ternary & logikal operator && dan || */}
          <div className={counter % 2 === 0 ? "bg-green-600" : "bg-yellow-300"}>
            {counter >= 10 && <div> keren</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
