"use client";
import React, { useEffect, useState } from "react";
import CategoryCard from "@/components/modules/categoryCard/CategoryCard";
import ItemCard from "@/components/modules/itemCard/ItemCard";

type ProductPropsType = {
  allProducts: any;
};

export default function Products({ allProducts }: ProductPropsType) {
  const [catName, setCatName] = useState("");
  const [products, setProducts] = useState<any>(allProducts);

  const [filteredItems, setFilteredItems] = useState([]);
  console.log("filteredItems =>", filteredItems);

  useEffect(() => {
    setFilteredItems(
      products.filter((category: any) => category.title === catName)
    );
  }, [catName]);

  return (
    <div className="flex flex-col px-4 font-iranSans mt-10 mb-5 ">
      <p className=" text-xl mb-5">دسته بندی ها</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4  lg:grid-cols-8 xl:grid-cols-8 gap-4">
        {allProducts.map((product: any, index: number) => (
          <CategoryCard key={index} {...product} setCatName={setCatName} />
        )) || <p>دسته بندی یافت نشد</p>}
      </div>
      <div className="flex flex-col  font-iranSans mt-10 mb-5 ">
        <p className=" text-xl mb-5">آیتم ها</p>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {!filteredItems.length
            ? products.map((card: any, index: number) =>
                card.product_menu.map((item: any, index: number) => (
                  <ItemCard key={index} {...item} />
                ))
              )
            : filteredItems.map((item: any, index: number) =>
                item.product_menu.map((cart: any) => (
                  <ItemCard key={index} {...cart} />
                ))
              )}
        </div>
      </div>
    </div>
  );
}
