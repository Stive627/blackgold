"use client"
import { createContext, useContext, useState } from "react";

const OptionContext = createContext(undefined);

export const OptionProvider = ({ children }) => {
  const [option, setOption] = useState('Current Orders');


  return (
    <OptionContext.Provider
      value={{
        option,
        handleOption: (value) => setOption(value),
      }}
    >
      {children}
    </OptionContext.Provider>
  );
};

export const useOption = () => useContext(OptionContext)