import { createContext, useState, useContext } from 'react';

// Create a context
const ColorContext = createContext();

// Provider Component
export const ColorProvider = ({ children }) => {
  const [outerColor, setOuterColor] = useState('#FFFFFF'); // Default color for ring box
  const [shankColor, setShankColor] = useState('#FFFFFF'); // Default color for shank
  const [filterCount, setFilterCount] = useState(0) // for tracking which filter screen to display

  return (
    <ColorContext.Provider value={{ outerColor, setOuterColor, shankColor, setShankColor, filterCount, setFilterCount }}>
      {children}
    </ColorContext.Provider>
  );
};

// Custom hook to use the ColorContext
export const useColorContext = () => {
  return useContext(ColorContext);
};
