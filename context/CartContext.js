"use client"
import { createContext, useContext, useState } from "react";

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({items:[]});
  return (
    <CartContext.Provider
      value={{
        cart,
        handleItems: (item) => setCart({...cart, items:[...new Set([...cart.items, item])]}),
        removed: (value) => setCart({...cart, items:cart.items.filter(elt => elt!== value)})
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext)