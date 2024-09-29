"use client";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export default function CategoryCard() {
  return (
    <Link
      href={"#"}
      className="shadow-xl relative rounded-md overflow-hidden transition-all hover:shadow-none duration-300 group"
    >
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
      />
      <button className="min-w-1/2 max-w-full mx-auto absolute bottom-0 !z-10 px-4 py-2 bg-white rounded-tl-btn flex gap-1 items-center text-[0.8rem] sm:text-base truncate">
        شیرینی سنتی و صنعتی
        <use className=" transition-all duration-300 group-hover:-translate-x-1 text-red-500 ">
          <MdOutlineKeyboardArrowLeft size={"1.2rem"} />
        </use>
      </button>
    </Link>
  );
}
