import { createContext, useContext, useState } from "react";

const StateCtx = createContext();

function StateProvider({ children }) {
  const [activeStates, setActiveStates] = useState([]);
  const [activeData, setActiveData] = useState([]);
  const [stateNames, setStateNames] = useState([]);

  return <StateCtx.Provider value={{stateNames, setStateNames, activeData, setActiveData, activeStates, setActiveStates}}>{children}</StateCtx.Provider>
}

const useActiveStates = () => {
  const ctx = useContext(StateCtx);

  if(ctx === undefined) {
    throw new Error('useActiveState hook must be a child of the State context provider');
  };

  return ctx;
};

export { StateCtx, StateProvider, useActiveStates};