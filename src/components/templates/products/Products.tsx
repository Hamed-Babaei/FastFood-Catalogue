"use client";
import React, { useEffect, useState } from "react";
import CategoryCard from "@/components/modules/categoryCard/CategoryCard";
import ItemCard from "@/components/modules/itemCard/ItemCard";

export interface ProductsType {
  id: number;
  title: string;
  img: string;
  parent_id: number;
  branch_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  product_menu: ProductMenuType[];
  setCatName?: (name?: string) => void;
}
export interface CategoriesType {
  id: number;
  title: string;
  img: string;
  parent_id: number;
  branch_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  product_menu: ProductMenuType[];
}

export interface ProductMenuType {
  id: number;
  branch_id: number;
  langueg_id: number;
  menu_id: number;
  image: string;
  images: Image[];
  title: string;
  description: string;
  min_description: string | null;
  rate: number | null;
  calory: number | null;
  status: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  varieties: Variety[];
  extra: any[];
  material: any[];
  count?: number;
}

export interface Image {
  code: string;
  path: string;
  user_id: number;
}
export interface Variety {
  id: number;
  product_id: number;
  title: string;
  min_description: string | null;
  description: string | null;
  price: string;
  price_paking: string;
  count: number;
  discount: string;
  order: string;
  max_order: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  discounted_price: number;
}
type ProductPagePropsType = {
  allProducts: ProductsType[];
};

export default function Products({ allProducts }: ProductPagePropsType) {
  const [catName, setCatName] = useState<string>("");
  const [products, setProducts] = useState<ProductsType[]>(allProducts);
  const [filteredItems, setFilteredItems] = useState<ProductsType[] | []>([]);

  useEffect(() => {
    setFilteredItems(
      products.filter((category: ProductsType) => category.title === catName)
    );
  }, [catName]);

  return (
    <div className="flex flex-col px-4 font-iranSans mt-10 mb-5 ">
      <p className=" text-xl mb-5">دسته بندی ها</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4  lg:grid-cols-8 xl:grid-cols-8 gap-4">
        {allProducts.map((category: ProductsType, index: number) => (
          <CategoryCard
            key={index}
            category={category}
            setCatName={setCatName}
          />
        )) || <p>دسته بندی یافت نشد</p>}
      </div>
      <div className="flex flex-col  font-iranSans mt-10 mb-5 ">
        <p className=" text-xl mb-5">آیتم ها</p>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {!filteredItems.length
            ? products.map((card: ProductsType, index: number) =>
                card.product_menu.map(
                  (item: ProductMenuType, index: number) => (
                    <ItemCard key={index} item={item} />
                  )
                )
              )
            : filteredItems.map((cart: ProductsType, index: number) =>
                cart.product_menu.map((item: ProductMenuType) => (
                  <ItemCard key={index} item={item} />
                ))
              )}
        </div>
      </div>
    </div>
  );
}
