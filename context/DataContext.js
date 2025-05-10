"use client"
import { createContext, useContext, useState } from "react";

const DataContext = createContext(undefined);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(undefined);

  return (
    <DataContext.Provider
      value={{
        data,
        handleData: (data) => setData(data),
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData= () => useContext(DataContext)