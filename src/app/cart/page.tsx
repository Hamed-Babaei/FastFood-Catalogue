"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

export default function page() {
  // State for cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "چلو مرغ", price: 1000000, quantity: 1 },
    { id: 2, name: "برگر با سیب زمینی", price: 8, quantity: 2 },
    { id: 3, name: "پیتزا", price: 12000, quantity: 1 },
  ]);

  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <>
      <div className="flex flex-col ">
        <Image
          src={"/1.svg"}
          width={800}
          height={800}
          alt="image"
          className="!w-full relative"
        />
      </div>
      <div className=" absolute top-[40vh] w-full !font-iranSans">
        <div className="flex flex-col md:flex-row justify-between p-4   bg-white">
          {/* Main section (cart items) */}
          <main className="md:w-2/3 md:border-e w-full mb-4 md:mb-0">
            <h2 className="text-xl font-bold mb-4  ">سبد خرید</h2>
            <div className="">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-white sm:pb-4 pb-0 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/1yyt5jsv.4kt_280x175.jpg"}
                      alt="image"
                      width={400}
                      height={600}
                      className="w-1/4 rounded-md h-full"
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="sm:text-lg font-semibold text-sm">
                        {item.name}
                      </h3>
                      <p className="text-sm">
                        قیمت: <span>{item.price}</span> تومان
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center !w-[8rem] md:w-fit">
                    <div className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-end">
                      <button
                        // onClick={() => dispatch(increase(id))}
                        className="bg-gray-300 rounded-md p-2  hover:bg-gray-200 transition-all "
                      >
                        +
                      </button>
                      <span className="px-2">
                        {item.quantity.toLocaleString("fa-IR")}
                      </span>
                      <button
                        className={`bg-gray-300 rounded-md p-2 me-2 hover:bg-gray-200 transition-all ${
                          item.quantity === 1 ? "disabled" : ""
                        }`}
                        // onClick={() => dispatch(decrease(id))}
                      >
                        -
                      </button>
                      <br />
                      <button
                        className="flex gap-1 items-center text-red-500 bg-transparent border-none shadow-none  pe-0 text-sm md:text-md"
                        type="button"
                        // onClick={() => dispatch(removeItem(id))}
                      >
                        <RiCloseCircleLine className="ms-1" />
                        <span className="">حذف</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>

          {/* Sidebar (total price) */}
          <aside className="md:w-1/3 w-full bg-white p-4 rounded-lg mt-5">
            <div className="flex justify-between items-center">
              <span>مجموع پرداختی:</span>
              <span className="text-xl font-bold">${calculateTotal()}</span>
            </div>
            <div className="border-t mt-5">
              <Link
                href={"/invoice"}
                className="btn !w-full mt-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all duration-300"
              >
                ثبت فاکتور و پرداخت
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
