import { createContext, useContext, useState } from "react";

const DataCtx = createContext();

function DataProvider({ children }) {
  const [activeData, setActiveData] = useState([]);
  const [activePopulation, setActivePopulation] = useState('');

  return (
  <DataCtx.Provider 
  value={{
    activeData, 
    setActiveData, 
    activePopulation, 
    setActivePopulation
    }}>
    {children}
  </DataCtx.Provider>
  );
};

const useActiveData = () => {
  const ctx = useContext(DataCtx);

  if(ctx === undefined) {
    throw new Error('useActiveData hook must be a child of the data context provider');
  };

  return ctx;
}

export { DataCtx, DataProvider, useActiveData};
