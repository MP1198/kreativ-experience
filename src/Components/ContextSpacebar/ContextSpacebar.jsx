import React, { createContext, useContext, useState } from "react";

const SpacebarContext = createContext();

export const useSpacebar = () => useContext(SpacebarContext);

export const SpacebarProvider = ({ children }) => {
  const [isSpacebarPressed, setIsSpacebarPressed] = useState(false);

  const setSpacebarPressed = (value) => {
    setIsSpacebarPressed(value);
  };

  return (
    <SpacebarContext.Provider value={{ isSpacebarPressed, setSpacebarPressed }}>
      {children}
    </SpacebarContext.Provider>
  );
};
