import React from 'react'
import '../../styles/components/box.scss'
import LikeButton from '../buttons/LikeButton'
import { useCart } from '../../contexts/CartContext'
import QuantityAdjuster from './QuantityAdjuster'

const Box = ({
  id,
  title,
  subtitle,
  price,
  content,
  isImageVisible,
  isLineVisible,
  isHeaderVisible,
  categoryTitle,
  categoryPrice,
  formattedCategoryPrice,
}) => {
  // Utilisez le hook useCart pour accéder à la fonction addToCart
  const { cartItems, addToCart, removeFromCart } = useCart()

  // Trouvez l'item dans le panier par son id
  const cartItem = cartItems.find((item) => item.id === id)
  const isInCart = Boolean(cartItem)

  // Classe conditionnelle pour le conteneur de l'image de fond
  const backgroundClass = isImageVisible
    ? 'box-image-background'
    : 'box-image-background hidden'
  // Classe conditionnelle pour l'élément de la ligne
  const lineClass = isLineVisible ? 'box-line' : 'box-line hidden'

  const displayPrice = formattedCategoryPrice ? (
    <div className="box-price">{formattedCategoryPrice}</div>
  ) : null

  // Préparez l'objet menu pour l'ajout au panier
  const menu = {
    id,
    title: categoryTitle,
    price: categoryPrice,
    subtitle,
    content,
  }

  return (
    <article className="box">
      {isHeaderVisible && (
        <div className="box-header">
          <h1 className="box-title">{title}</h1>
          <span className={lineClass}></span>
          {displayPrice}
        </div>
      )}
      <div className="header-menu">
        {subtitle && <h2 className="box-subtitle">{subtitle}</h2>}
        <LikeButton itemId={id} />
        {/* Conditionnellement afficher QuantityAdjuster ou le bouton ajouter au panier */}
        {isInCart ? (
          <QuantityAdjuster
            quantity={cartItem.quantity}
            onIncrease={() => addToCart(menu)}
            onDecrease={() => removeFromCart(id)}
          />
        ) : (
          <button
            onClick={() => addToCart(menu)}
            className="add-to-cart-button"
          >
            Ajouter au panier
          </button>
        )}
      </div>
      {content && <div className="box-content">{content}</div>}
      <div className={backgroundClass}></div>
    </article>
  )
}

export default Box
