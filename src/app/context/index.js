import React from 'react';

import { TokenProvider } from "./TokenContext"
/**
* @func ContextProvider
* @param {Object} children
* @return {HTML}
*/
const ContextProvider = ({ children }) => {
  return (
    <TokenProvider>
      {children}
    </TokenProvider>
  )
}
export default ContextProvider