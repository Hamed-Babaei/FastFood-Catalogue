"use client";
import { ProductMenuType } from "@/components/templates/products/Products";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

interface ItemCardPropsType {
  item: ProductMenuType;
}

export default function ItemCard({ item }: ItemCardPropsType) {
  const [isShowCounter, setIsShowCounter] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProductIndex = cart.findIndex(
      (cartItem: any) => cartItem.id === item.id
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].count += count;
    } else {
      cart.push({ ...item, count });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const updateCart = (handler: "increase" | "decrease" | "delete") => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProductIndex = cart.findIndex(
      (cartItem: any) => cartItem.id === item.id
    );

    if (existingProductIndex !== -1) {
      if (handler === "increase") {
        cart[existingProductIndex].count += 1;
        setCount(cart[existingProductIndex].count);
      }

      if (handler === "decrease" && cart[existingProductIndex].count > 1) {
        cart[existingProductIndex].count -= 1;
        setCount(cart[existingProductIndex].count);
      }

      if (handler === "delete" || (handler === "decrease" && count === 1)) {
        cart.splice(existingProductIndex, 1);
        setIsShowCounter(false);
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProduct = cart.find(
      (cartItem: any) => cartItem.id === item.id
    );

    if (existingProduct) {
      setCount(existingProduct.count);
      setIsShowCounter(true);
    }
  }, [item.id]);

  return (
    <div className="flex items-center gap-2 shadow-xl p-2 bg-gray-300/15 rounded-md overflow-hidden ">
      <Image
        src={item.image}
        alt="image"
        width={400}
        height={600}
        className="w-1/4 rounded-md h-24 "
      />
      <div className="flex flex-col items-center w-3/4">
        <div className="flex flex-col gap-1 w-full">
          <p className="text-md text-start">{item.title}</p>
          <p className="text-xs text-start text-gray-500 whitespace-nowrap line-clamp-1">
            {item.description}
          </p>
        </div>
        <div className="flex items-center justify-between w-full mt-2">
          <p className="text-red-500 bg-slate-100 px-2 py-1 rounded-md font-iranSans">
            {Number(item.varieties?.[0].price).toLocaleString("fa-IR")}
          </p>
          {isShowCounter ? (
            <button className="bg-red-500 text-white py-1 rounded-md transition-all flex items-center justify-between w-20 px-1">
              <span className="w-1/3" onClick={() => updateCart("increase")}>
                <FaPlus size={"0.8rem"} />
              </span>
              <span className="w-1/3">{count}</span>
              {count === 1 ? (
                <span className="!w-7" onClick={() => updateCart("delete")}>
                  <MdDelete size={"1.5rem"} />
                </span>
              ) : (
                <span className="!w1/3" onClick={() => updateCart("decrease")}>
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
                addToCart();
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
