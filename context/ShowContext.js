"use client"
import { createContext, useContext, useState } from "react";

const ShowContext = createContext(undefined);

export const ShowProvider = ({ children }) => {
  const [show, setShow] = useState({profile:false, cart:false, category:undefined});

  return (
    <ShowContext.Provider
      value={{
        show,
        handleShowProfile: () => setShow({...show, profile:!show.profile}),
        handleShowCart:()=> setShow({...show, cart:!show.cart}),
        handleCategory:(indx)=>setShow({...show, category:indx}),
      }}
    >
      {children}
    </ShowContext.Provider>
  );
};

export const useShow = () => useContext(ShowContext)