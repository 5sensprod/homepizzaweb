// src/components/cart/index.jsx
import React from 'react'
import { useCart } from '../../contexts/CartContext'
import '../../styles/components/cartDetails.scss'

const CartDetails = () => {
  const { cartItems, removeFromCart } = useCart()

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
                <p>Prix unitaire: {item.price}</p>
                <p>Quantité: {item.quantity}</p>
                {/* Mettre en évidence la modification du bouton pour retirer des articles */}
                <div className="buttons">
                  <button onClick={() => removeFromCart(item.id)}>
                    Retirer un
                  </button>
                  {/* Vous pouvez également ajouter un bouton pour augmenter la quantité si nécessaire */}
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Votre panier est vide.</p>
      )}
    </div>
  )
}

export default CartDetails
