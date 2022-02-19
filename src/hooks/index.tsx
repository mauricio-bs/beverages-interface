import React from 'react'
import { CartProvider } from './CartContext'
import { UserProvider } from './UserContext'

const AppProvider = ({ children }: React.ReactChild | React.ReactNode) => (
  <UserProvider>
    <CartProvider>{children}</CartProvider>
  </UserProvider>
)

export default AppProvider
