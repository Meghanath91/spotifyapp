import React from 'react';

import { TokenProvider } from "./TokenContext"

const ContextProvider = ({ children }) => {
  return (
    <TokenProvider>
      {children}
    </TokenProvider>
  )
}
export default ContextProvider