import { createContext, useContext, useState } from "react";

const InfoCtx = createContext() 

function InfoProvider({ children }) {
  const [activeInfo, setActiveInfo] = useState({ total: '', selectedPopulation: '' });

  return ( 
    <InfoCtx.Provider value={{activeInfo, setActiveInfo}}>
      {children}
    </InfoCtx.Provider>
  );
};

const useInfo = () => {
  const ctx = useContext(InfoCtx);

  if(ctx === undefined) {
    throw new Error('use info hook must be a child of the info context provider');
  };

  return ctx;
}

export {InfoCtx, InfoProvider, useInfo};
