import { createContext, useState, useContext } from 'react';

// Create a context
const ColorContext = createContext();

// Provider Component
export const ColorProvider = ({ children }) => {
  const [outerColor, setOuterColor] = useState('#FFFFFF'); // Default color
  const [innerColor, setInnerColor] = useState('#FFFFFF'); // Default color for another part

  return (
    <ColorContext.Provider value={{ outerColor, setOuterColor, innerColor, setInnerColor }}>
      {children}
    </ColorContext.Provider>
  );
};

// Custom hook to use the ColorContext
export const useColorContext = () => {
  return useContext(ColorContext);
};
