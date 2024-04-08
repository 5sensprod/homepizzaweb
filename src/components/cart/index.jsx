// src/components/cart/index.jsx
import React from 'react'
import { useCart } from '../../contexts/CartContext'
import formatPrice from '../../utils/formatPrice' // Importez formatPrice
import '../../styles/components/cartDetails.scss'
import QuantityAdjuster from '../ui/QuantityAdjuster'

const CartDetails = () => {
  const { cartItems, addToCart, removeFromCart, resetCart, getCartTotal } =
    useCart()

  // Formattez le total du panier
  const formattedTotal = formatPrice(getCartTotal())

  return (
    <div className="cart-details">
      {cartItems.length > 0 ? (
        <>
          <h2>Votre Sélection</h2>
          <ul>
            {cartItems.map((item) => {
              // Formattez chaque prix d'article
              const formattedItemPrice = formatPrice(item.price)

              return (
                <li key={item.id}>
                  <h3>
                    {item.title} - {item.subtitle}
                  </h3>
                  <p>Prix unitaire: {formattedItemPrice}</p>{' '}
                  {/* Utilisez formattedItemPrice ici */}
                  <QuantityAdjuster
                    quantity={item.quantity}
                    onIncrease={() => addToCart({ ...item, quantity: 1 })}
                    onDecrease={() => removeFromCart(item.id)}
                  />
                </li>
              )
            })}
            <div>Total du panier: {formattedTotal}</div>{' '}
            {/* Utilisez formattedTotal ici */}
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
