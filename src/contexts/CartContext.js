// src/contexts/CartContext.js
import React, { createContext, useState, useContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const newItems = [...prevItems, item]
      console.log('Panier après ajout:', newItems) // Log après ajout
      return newItems
    })
  }

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      const newItems = prevItems.filter((item) => item.id !== itemId)
      console.log('Panier après suppression:', newItems) // Log après suppression
      return newItems
    })
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

// Hook personnalisé pour utiliser le contexte du panier
export const useCart = () => useContext(CartContext)
