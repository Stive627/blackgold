"use client"
import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [lang, setlang] = useState('fr');
  useEffect(()=>{
    let localLang = navigator.language
    setlang(localLang)
  },[])

  return (
    <LangContext.Provider
      value={{
        lang,
        toggleLang: () => setlang(lang === "fr" ? "en-US" : "fr"),
      }}
    >
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext)