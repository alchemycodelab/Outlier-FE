import { createContext, useContext, useState } from "react";

const ThemeCtx = createContext();

function ThemeProvider({ children }) {
  const [isActive, setActive] = useState(false);

  return (
    <ThemeCtx.Provider value={{isActive, setActive}}>
      {children}
    </ThemeCtx.Provider>
  );
};

const useTheme = () => {
  const ctx = useContext(ThemeCtx);

  if(ctx === undefined) {
    throw new Error('useTheme hook must be a child component of the theme provider')
  };
  return ctx;
};

export { ThemeCtx, ThemeProvider, useTheme };