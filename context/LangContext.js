"use client"
import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext(undefined);

export const LangageProvider = ({ children }) => {
  const [lang, setlang] = useState('fr');
  useEffect(()=>{
    let localLang = navigator.language
    if(localLang.startsWith('en')){
      setlang('en')
    }
    else{
    setlang(localLang)
    }
  },[])

  return (
    <LangContext.Provider
      value={{
        lang,
        toggleLang: () => setlang(lang === "fr" ? "en" : "fr"),
      }}
    >
      {children}
    </LangContext.Provider>
  );
};

export const useLang = () => useContext(LangContext)