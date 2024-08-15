"use client";
import { ReactNode, createContext, useContext, useState } from "react";

export interface TextColorContextType {
  textColor: string;
  toggleTextColor: () => void;
}

// Define the props for the provider
interface TextColorProviderProps {
  children: ReactNode;
}

const BLACK = "#181818";
const WHITE = "#484848";

const TextColorContext = createContext<TextColorContextType | undefined>(
  undefined
);

export const TextColorProvider: React.FC<TextColorProviderProps> = ({
  children,
}) => {
  const [textColor, setTextColor] = useState(BLACK); // default to black

  const toggleTextColor = () => {
    setTextColor((prevColor) => (prevColor === BLACK ? WHITE : BLACK));
  };

  return (
    <TextColorContext.Provider value={{ textColor, toggleTextColor }}>
      {children}
    </TextColorContext.Provider>
  );
};

export const useTextColor = () => {
  const context = useContext(TextColorContext);
  if (!context) {
    throw new Error("useTextColor must be used within a TextColorProvider");
  }
  return context;
};
