import React, { useState, createContext } from "react";
export const TokenContext = createContext();
/**
* @func TokenProvider
* @param {Object} children
* @return {HTML}
*/
export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};
