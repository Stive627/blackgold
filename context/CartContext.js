"use client"
import { createContext, useContext, useState } from "react";

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({items:[], total:0});
  return (
    <CartContext.Provider
      value={{
        cart,
        handleItems: (item) => setCart({...cart, items:[...new Set([...cart.items, item])]}),
        removed: (value) => setCart({...cart, items:cart.items.filter(elt => elt!== value)}),
        addTotal: (value) => setCart({...cart, total:value})
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext)