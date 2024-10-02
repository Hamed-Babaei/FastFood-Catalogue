"use client";
import { CartContext } from "@/context/CartContext";
import React, { useContext, useEffect, useState } from "react";

// تعریف نوع برای محصول
interface Product {
  id: number;
  title: string;
  varieties: {
    price: number;
  }[];
  count: number;
}

export default function Page() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const cartContext = useContext(CartContext);

  // گرفتن اطلاعات از LocalStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    const calculateTotal = () => {
      return cartItems.reduce(
        (total, item) => total + item.varieties[0].price * item.count,
        0
      );
    };
  }, []);
  const calculateTotal = () => {
    if (cartItems) {
      return cartItems.reduce(
        (total, item) => total + item.varieties[0].price * item.count,
        0
      );
    }
  };

  return (
    <div className="p-8 font-iranSans">
      <div>
        <p className="text-2xl">فاکتور خرید</p>
        <p className="text-sm text-gray-400 mt-1">باتشکر از خرید شما!</p>
      </div>
      <div className="mt-5 px-0">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>تعداد</th>
                <th>نام آیتم</th>
                <th>قیمت آیتم (تومان)</th>
                <th>مجموع (تومان)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* تکرار اطلاعات محصولات */}
              {cartItems.map((item) => (
                <tr key={item.id} className="hover">
                  <th>{item.count}</th>
                  <td>{item.title}</td>
                  <td>
                    {Number(item.varieties[0].price).toLocaleString("fa-IR")}
                  </td>
                  <td>
                    {Number(
                      item.count * item.varieties[0].price
                    ).toLocaleString("fa-IR")}
                  </td>
                </tr>
              ))}
              <td></td>
              <td>
                {" "}
                {(cartContext?.selectedTables && (
                  <span className="px-2 py-1 bg-gray-100 rounded-md">{`میز ${cartContext.selectedTables} نفره`}</span>
                )) ||
                  "انتخاب نشده"}
              </td>
              <td></td>
              <td> {calculateTotal()?.toLocaleString("fa-IR")} تومان</td>
            </tbody>
          </table>
        </div>
        <a
          href="javascript:window.print()"
          className="bg-red-500 px-3 py-1 rounded-md text-white float-left mt-5 hover:bg-red-400 transition-all duration-300"
        >
          چاپ فاکتور
        </a>
      </div>
    </div>
  );
}
