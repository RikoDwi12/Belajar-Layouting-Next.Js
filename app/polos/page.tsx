"use client";
import { log } from "console";
import { useState } from "react";
import React from "react";

// ini merupakan contoh state
const Page = () => {
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
      <div className="bg-yellow-300">Ini Wrap untuk latihan use state</div>
      <div className="bg-red-600 ">
        <button
          className="p-1 rounded-md bg-white text-black"
          onClick={incrementCounter}
        >
          +
        </button>
        <div className="">{counter}</div>
        <button
          className="p-1 rounded-md bg-white text-black"
          onClick={decrementCounter}
        >
          -
        </button>
      </div>
      {/* ini menggunakan ternary */}
      <div className={counter % 2 === 0 ? "bg-green-600" : "bg-yellow-300"}>
        {counter % 2 === 0 ? "Genap" : "Ganjil"}
      </div>
    </>
  );
};

export default Page;
