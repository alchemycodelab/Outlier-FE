import { createContext, useContext, useEffect, useState } from "react";
import getScreenSize from "../../utils/screenHelper";


const ScreenCtx = createContext();

const ScreenProvider = ({children}) => {
  const [mobile, setMobile] = useState(false);
  const [midSize, setMidSize] = useState(false);
  const [largeSize, setLargeSize] = useState(false);
  const [screenSize, setScreenSize] = useState(null); 

  useEffect(() => {
    const setSize = async () => {
      const size = getScreenSize();
      setScreenSize(size);
      if(size <= 500) {
        setMobile(true)
      } else if (size > 700 && size <= 1035) {
        setMidSize(true);
      } else {
        setLargeSize(true);
      }
    };
    setSize();
  }, []);

  return (
  <ScreenCtx.Provider 
    value={{
      screenSize, 
      setScreenSize, 
      mobile, 
      setMobile, 
      midSize, 
      setMidSize, 
      largeSize, 
      setLargeSize
    }}>
      {children}
  </ScreenCtx.Provider>
  )
};

const useScreen = () => {
  const ctx = useContext(ScreenCtx);

  if(ctx === undefined) {
    throw new Error('useScreen custom hook can only be called within children of ScreenCtx Provider');
  };
  return ctx;
};

export { ScreenProvider, useScreen}