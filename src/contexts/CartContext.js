import React, { createContext, useState, useContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === newItem.id)
      if (itemIndex > -1) {
        const newItems = [...prevItems]
        newItems[itemIndex] = {
          ...newItems[itemIndex],
          quantity: newItems[itemIndex].quantity + 1,
        }
        return newItems
      } else {
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

  const resetCart = () => {
    setCartItems([])
  }

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price)
      return total + price * item.quantity
    }, 0)
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, resetCart, getCartTotal }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
