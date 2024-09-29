"use client";
import ItemCard from "@/components/modules/itemCard/ItemCard";
import React, { useState } from "react";

export interface CardTypes {
  title: string;
  desc: string;
  price: number;
}

export default function ItemCards() {
  const [cards, setCards] = useState<CardTypes[]>([
    {
      title: "چلومرغ و بادمجان",
      desc: "نصف ران مرغ سرخ شده .خورشت بادمجان.چلوایرانی",
      price: 250000,
    },
    {
      title: "چلومرغ و بادمجان",
      desc: "نصف ران مرغ سرخ شده .خورشت بادمجان.چلوایرانی",
      price: 250000,
    },
    {
      title: "چلومرغ و بادمجان",
      desc: "نصف ران مرغ سرخ شده .خورشت بادمجان.چلوایرانی",
      price: 250000,
    },
    {
      title: "چلومرغ و بادمجان",
      desc: "نصف ران مرغ سرخ شده .خورشت بادمجان.چلوایرانی",
      price: 250000,
    },
    {
      title: "چلومرغ و بادمجان",
      desc: "نصف ران مرغ سرخ شده .خورشت بادمجان.چلوایرانی",
      price: 250000,
    },
    {
      title: "چلومرغ و بادمجان",
      desc: "نصف ران مرغ سرخ شده .خورشت بادمجان.چلوایرانی",
      price: 200000,
    },
    {
      title: "چلومرغ و بادمجان",
      desc: "نصف ران مرغ سرخ شده .خورشت بادمجان.چلوایرانی",
      price: 150000,
    },
    {
      title: "چلومرغ و بادمجان",
      desc: "نصف ران مرغ سرخ شده .خورشت بادمجان.چلوایرانی",
      price: 350000,
    },
  ]);
  return (
    <div className="flex flex-col px-4 font-iranSans mt-10 mb-5 ">
      <p className=" text-xl mb-5">آیتم ها</p>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {cards &&
          cards.map((card, index: number) => (
            <ItemCard key={index} {...card} />
          ))}
      </div>
    </div>
  );
}
