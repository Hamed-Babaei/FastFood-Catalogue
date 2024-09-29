import { CardTypes } from "@/components/templates/itemCards/ItemCards";
import Image from "next/image";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function ItemCard(card: CardTypes) {
  const [isShowCounter, setIsShowCounter] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);

  const counterHandler = (handler: "increase" | "decrease" | "delete") => {
    if (handler === "increase") {
      setCount((pre) => pre + 1);
    }
    if (handler === "decrease") {
      if (count >= 1) {
        setCount((pre) => pre - 1);
      }
    }
    if (handler === "delete") {
      setIsShowCounter(false);
      setCount(0);
    }
  };

  return (
    <div className="flex items-center gap-2 shadow-xl p-2 bg-gray-300/15 rounded-md overflow-hidden">
      <Image
        src={"/1yyt5jsv.4kt_280x175.jpg"}
        alt="image"
        width={400}
        height={600}
        className="w-1/4 rounded-md h-full"
      />
      <div className="flex flex-col items-center w-3/4">
        <div className="flex flex-col gap-1 w-full">
          <p className="text-md text-start">{card.title}</p>
          <p className="text-xs text-start text-gray-500 whitespace-nowrap line-clamp-1">
            {card.desc}
          </p>
        </div>
        <div className="flex items-center justify-between w-full mt-2">
          <p className="text-red-500 bg-slate-100 px-2 py-1 rounded-md ">
            {card.price}
          </p>
          {isShowCounter ? (
            <button className="bg-red-500 text-white  py-1 rounded-md transition-all flex items-center justify-between  w-20 px-1">
              <span
                className="w-1/3 "
                onClick={() => counterHandler("increase")}
              >
                <FaPlus size={"0.8rem"} />
              </span>
              <span className="w-1/3">{count}</span>
              {count === 1 ? (
                <span className="!w-7" onClick={() => counterHandler("delete")}>
                  <MdDelete size={"1.5rem"} />
                </span>
              ) : (
                <span
                  className="!w1/3 "
                  onClick={() => counterHandler("decrease")}
                >
                  -
                </span>
              )}
            </button>
          ) : (
            <button
              className="bg-red-500 text-white px-5 py-1 rounded-md hover:opacity-80 transition-all"
              onClick={() => {
                setIsShowCounter(true);
                setCount(1);
              }}
            >
              افزودن
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
