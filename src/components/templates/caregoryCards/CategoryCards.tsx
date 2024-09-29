"use client";

import CategoryCard from "@/components/modules/categoryCard/CategoryCard";
import React, { useState } from "react";

export default function CategoryCards() {
  const [cards, setCards] = useState<any>([
    { title: "sdadasd" },
    { title: "sdadasd" },
    { title: "sdadasd" },
    { title: "sdadasd" },
    { title: "sdadasd" },
    { title: "sdadasd" },
    { title: "sdadasd" },
    { title: "sdadasd" },
  ]);
  return (
    <div className="flex flex-col px-4 font-iranSans mt-10 mb-5 ">
      <p className=" text-xl mb-5">دسته بندی ها</p>
      <div className="grid grid-cols-2 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cards && cards.map((index: number) => <CategoryCard key={index} />)}
      </div>
    </div>
  );
}
