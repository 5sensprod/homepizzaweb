import React from 'react'
import '../../styles/components/box.scss'
import LikeButton from '../buttons/LikeButton'
import QuantityAdjuster from './QuantityAdjuster'
import { useCart } from '../../contexts/CartContext'
import classNames from 'classnames'
import BoxHeader from './BoxHeader'

const Box = ({
  id,
  subtitle,
  content,
  isImageVisible,
  isLineVisible,
  isHeaderVisible,
  categoryTitle,
  categoryPrice,
  formattedCategoryPrice,
}) => {
  const { cartItems, addToCart, removeFromCart } = useCart()
  const isInCart = cartItems.some((item) => item.id === id)
  const cartItem = cartItems.find((item) => item.id === id) || {}

  const backgroundClass = classNames('box-image-background', {
    hidden: !isImageVisible,
  })

  const lineClass = classNames('box-line', {
    hidden: !isLineVisible,
  })

  const handleAddToCart = () => {
    addToCart({
      id,
      title: categoryTitle,
      price: categoryPrice,
      subtitle,
      content,
    })
  }

  return (
    <article className="box">
      {isHeaderVisible && (
        <BoxHeader
          title={categoryTitle}
          price={formattedCategoryPrice}
          lineClass={lineClass}
        />
      )}
      <div className="header-menu">
        {subtitle && <h2 className="box-subtitle">{subtitle}</h2>}
        <LikeButton itemId={id} />
        {isInCart ? (
          <QuantityAdjuster
            quantity={cartItem.quantity}
            onIncrease={handleAddToCart}
            onDecrease={() => removeFromCart(id)}
          />
        ) : (
          <button onClick={handleAddToCart} className="add-to-cart-button">
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
