"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

interface CartItem {
  id: number;
  title: string;
  description: string;
  image: string;
  count: number;
  varieties: {
    price: string;
    discounted_price: number;
  }[];
}
interface CartContextType {
  selectedTables: number;
  setSelectedTables: (count: number) => void;
  totalItems: number;
  setIsUpdate: (status: boolean | ((prevState: boolean) => boolean)) => void;
  cartItems: CartItem[];
  // addToCart: (item: CartItem) => void;
  // removeFromCart: (id: number) => void;
  // updateCartItem: (id: number, count: number) => void;
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

  //! cart Code /////////////////////////////////////////////////////
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);
  const calculateTotalItems = (items: CartItem[]) => {
    const total = items.reduce((acc, item) => acc + item.count, 0);
    setTotalItems(total);
  };
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
      calculateTotalItems(parsedCart);
    }
  }, []);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
      calculateTotalItems(parsedCart);
    }
  }, [isUpdate]);

  return (
    <CartContext.Provider
      value={{
        selectedTables,
        setSelectedTables: updateSelectedTables,
        cartItems,
        setIsUpdate,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
