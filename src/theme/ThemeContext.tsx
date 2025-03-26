import React, { createContext, useContext, useState } from "react";
import { defaultColors } from "./colors";

type ThemeContextType = {
  colors: typeof defaultColors;
  setTheme: (colors: typeof defaultColors) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({
  children,
  initialColors = defaultColors,
}: {
  children: React.ReactNode;
  initialColors?: typeof defaultColors;
}) => {
  const [colors, setColors] = useState<typeof defaultColors>(initialColors);

  const setTheme = (newColors: typeof defaultColors) => {
    setColors(newColors);
  };

  return (
    <ThemeContext.Provider value={{ colors, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
