"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import TableModal from "../tableModal/TableModal";
import { CartContext } from "@/context/CartContext";

export default function Navbar() {
  const [isShowModal, setIsShowModal] = useState(false);
  const cartContext = useContext(CartContext);
  if (!cartContext) return null;

  const [table, setTable] = useState({ title: "", value: 0 });

  useEffect(() => {
    if (table.value !== 0) {
      localStorage.setItem("table", JSON.stringify(table));
    }
  }, [table]);

  return (
    <>
      <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50 font-iranSans">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-iranSans">اصغر فود</a>
        </div>
        <div className="flex-none">
          <button
            className="bg-red-500 text-white px-5 py-1 rounded-md "
            onClick={() => cartContext.setTableStatus(true)}
          >
            {(cartContext.selectedTables && (
              <span>{`میز ${cartContext.selectedTables} نفره`}</span>
            )) ||
              "انتخاب نشده"}
          </button>
          <Link href={"/cart"} className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartContext.totalItems}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <TableModal />
    </>
  );
}
