import React from 'react'
import { useCart } from '../../contexts/CartContext'

const CartBadge = () => {
  const { cartItems } = useCart()

  if (cartItems.length === 0) return null

  return <div className="cart-badge">{cartItems.length}</div>
}

export default CartBadge
