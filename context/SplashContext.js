"use client"
import { createContext, useContext, useState } from "react";

const SplashContext = createContext(undefined);

export const SplashProvider = ({ children }) => {
  const [splash, setSplash] = useState(false);

  return (
    <SplashContext.Provider
      value={{
        splash,
        getSplashed: () => setSplash(true),
      }}
    >
      {children}
    </SplashContext.Provider>
  );
};

export const useSplah = () => useContext(SplashContext)