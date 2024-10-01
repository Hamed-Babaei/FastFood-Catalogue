"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

type CategoryCardType = {
  product: any;
  setCatName: (name: string) => void;
};

export default function CategoryCard(product: CategoryCardType) {
  return (
    <div
      className="shadow-xl rounded-md overflow-hidden transition-all hover:shadow-none duration-300 group flex items-center justify-center flex-col !cursor-pointer"
      onClick={() => product.setCatName(product.title)}
    >
      <Image
        src={
          product.img ||
          "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        }
        alt="Shoes"
        width={500}
        height={500}
        priority
        className="w-20  "
      />
      <button className="min-w-1/2 max-w-full mx-auto  !z-10 px-2 py-2 bg-white rounded-tl-btn flex  items-center text-[0.8rem] sm:text-base truncate">
        {product.title}
        <use className=" transition-all duration-300 group-hover:-translate-x-1 text-red-500 ">
          <MdOutlineKeyboardArrowLeft size={"1.2rem"} />
        </use>
      </button>
    </div>
  );
}
