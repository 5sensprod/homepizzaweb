import React from 'react'
import { useCart } from '../../contexts/CartContext'

const CartBadge = () => {
  const { cartItems } = useCart()

  // Calculer le nombre total d'articles en additionnant les quantités de chaque item
  const totalItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  )

  if (totalItemCount === 0) return null

  return <div className="cart-badge">{totalItemCount}</div>
}

export default CartBadge
