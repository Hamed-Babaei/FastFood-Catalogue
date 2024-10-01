"use client";
import CategoryCard from "@/components/modules/categoryCard/CategoryCard";
import React, { useState } from "react";

type CategoryCardsType = {
  products: any;
};

export default function CategoryCards({ products }: CategoryCardsType) {
  return (
    <div className="flex flex-col px-4 font-iranSans mt-10 mb-5 ">
      <p className=" text-xl mb-5">دسته بندی ها</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4  lg:grid-cols-8 xl:grid-cols-8 gap-4">
        {/* {(products &&
          products.map((product: any, index: number) => (
            <CategoryCard key={index} {...product} />
          ))) || <p>دسته بندی یافت نشد</p>} */}
      </div>
    </div>
  );
}
