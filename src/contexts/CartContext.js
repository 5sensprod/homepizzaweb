// src/contexts/CartContext.js
import React, { createContext, useState, useContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === newItem.id)
      if (itemIndex > -1) {
        // L'article existe déjà, augmentez seulement la quantité
        const newItems = [...prevItems]
        newItems[itemIndex] = {
          ...newItems[itemIndex],
          quantity: newItems[itemIndex].quantity + 1,
        }
        return newItems
      } else {
        // Ajoutez un nouvel article avec une quantité initiale de 1
        return [...prevItems, { ...newItem, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      return prevItems.reduce((acc, item) => {
        if (item.id === itemId) {
          if (item.quantity > 1) {
            // Diminuez la quantité s'il y a plus d'un
            acc.push({ ...item, quantity: item.quantity - 1 })
          }
          // Si la quantité est 1, l'article sera simplement ignoré et donc retiré
        } else {
          acc.push(item)
        }
        return acc
      }, [])
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
