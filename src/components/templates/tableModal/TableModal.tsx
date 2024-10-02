"use client";
import { CartContext } from "@/context/CartContext";
import React, { useContext, useEffect, useState } from "react";
export interface TablesTypes {
  title: string | null;
  value: number;
}

export default function TableModal() {
  const cartContext = useContext(CartContext);
  if (!cartContext) return null;

  const [isShow, setIsShow] = useState<boolean | null>(null);

  const [tables, setTables] = useState<TablesTypes[]>([
    { title: "دو نفره", value: 2 },
    { title: "چهار نفره", value: 4 },
    { title: "شش نفره", value: 6 },
    { title: "هشت نفره", value: 8 },
    { title: "ده نفره", value: 10 },
  ]);
  const [selectedTable, setSelectedTable] = useState<TablesTypes>({
    title: null,
    value: 0,
  });

  const clickHandler = () => {
    cartContext.setTableStatus(false);
    cartContext.setSelectedTables(selectedTable.value);
  };

  return (
    <dialog
      id="my_modal_1"
      className={`modal ${cartContext.tableStatus && "modal-open"} `}
    >
      <div className="modal-box font-iranSans">
        <h3 className="font-bold text-lg">خوش آمدید!</h3>
        <p className="py-4">
          برای سفارش آیتم های کافه، ابتدا میز خود را رزرو نمایید.
        </p>
        <div className="flex items-center justify-between">
          {tables.map((table) => (
            <div
              key={table.value}
              className={`border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-500 hover:text-white transition-all cursor-pointer ${
                selectedTable.value === table.value && `bg-gray-500 text-white`
              } ${
                table.value === cartContext.selectedTables &&
                `!bg-gray-500 !text-white`
              }`}
              onClick={() =>
                setSelectedTable({ title: table.title, value: table.value })
              }
            >
              {table.title}
            </div>
          ))}
        </div>
        {selectedTable.title}
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              disabled={selectedTable.value === 0}
              className="bg-red-500 text-white px-5 py-1 rounded-md hover:opacity-80 transition-all  disabled:opacity-80"
              onClick={clickHandler}
            >
              تایید
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
