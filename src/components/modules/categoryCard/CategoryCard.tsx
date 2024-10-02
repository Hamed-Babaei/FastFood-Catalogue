"use client";
import { ProductsType } from "@/components/templates/products/Products";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

interface CategoryCardType {
  category: ProductsType;
  setCatName: (title: string) => void;
}

export default function CategoryCard({
  category,
  setCatName,
}: CategoryCardType) {
  console.log("category => ", category);
  return (
    <div
      className="shadow-xl rounded-md overflow-hidden transition-all hover:shadow-none duration-300 group flex items-center justify-center flex-col !cursor-pointer"
      onClick={() => setCatName(category.title)}
    >
      <Image
        src={category.img}
        alt="Category imag"
        width={500}
        height={500}
        priority
        className="w-20"
      />
      <button className="min-w-1/2 max-w-full mx-auto  !z-10 px-2 py-2 bg-white rounded-tl-btn flex  items-center text-[0.8rem] sm:text-base truncate">
        {category.title}
        <use className=" transition-all duration-300 group-hover:-translate-x-1 text-red-500 ">
          <MdOutlineKeyboardArrowLeft size={"1.2rem"} />
        </use>
      </button>
    </div>
  );
}
