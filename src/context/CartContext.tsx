"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

interface CartContextType {
  selectedTables: number;
  setSelectedTables: (count: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export const TableProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTables, setSelectedTables] = useState<number>(0);

  useEffect(() => {
    // وقتی صفحه بارگذاری می‌شود مقدار لوکال‌استوریج را بخواند
    const storedTables = localStorage.getItem("selectedTables");
    if (storedTables) {
      setSelectedTables(Number(storedTables));
    }
  }, []);

  const updateSelectedTables = (count: number) => {
    setSelectedTables(count);
    localStorage.setItem("selectedTables", count.toString());
  };

  return (
    <CartContext.Provider
      value={{ selectedTables, setSelectedTables: updateSelectedTables }}
    >
      {children}
    </CartContext.Provider>
  );
};
