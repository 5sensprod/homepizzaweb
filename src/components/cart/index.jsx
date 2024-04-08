// src/components/cart/index.jsx
import React from 'react'
import { useCart } from '../../contexts/CartContext'
import '../../styles/components/cartDetails.scss'
import QuantityAdjuster from '../ui/QuantityAdjuster'

const CartDetails = () => {
  const { cartItems, addToCart, removeFromCart, resetCart, getCartTotal } =
    useCart()

  return (
    <div className="cart-details">
      {cartItems.length > 0 ? (
        <>
          <h2>Votre Sélection</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <h3>
                  {item.title} - {item.subtitle}
                </h3>
                <p>{item.price}</p>
                <QuantityAdjuster
                  quantity={item.quantity}
                  onIncrease={() => addToCart({ ...item, quantity: 1 })}
                  onDecrease={() => removeFromCart(item.id)}
                />
              </li>
            ))}
            <div>Total du panier: {getCartTotal().toFixed(2)} €</div>
            <button onClick={resetCart} className="reset-cart-button">
              Effacer la sélection
            </button>
          </ul>
        </>
      ) : (
        <p>Votre panier est vide.</p>
      )}
    </div>
  )
}

export default CartDetails
