import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";

interface GlobalContextType {
  isBoolean: boolean;
  toggleBoolean: () => void;
}

const GlobalContext = createContext<GlobalContextType>({
  isBoolean: false,
  toggleBoolean: () => {},
});

const GlobalProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isBoolean, setIsBoolean] = useState<boolean>(false);

  const toggleBoolean = () => {
    setIsBoolean((prevValue) => !prevValue);
  };

  return (
    <GlobalContext.Provider value={{ isBoolean, toggleBoolean }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }

  return context;
};

export { GlobalProvider, useGlobalContext };
