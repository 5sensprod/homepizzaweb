import React from 'react'
import '../../styles/components/box.scss'
import LikeButton from '../buttons/LikeButton'

const Box = ({
  id,
  title,
  subtitle,
  price,
  content,
  isImageVisible,
  isLineVisible,
  isHeaderVisible, // Ajout de la nouvelle prop
}) => {
  // Classe conditionnelle pour le conteneur de l'image de fond
  const backgroundClass = isImageVisible
    ? 'box-image-background'
    : 'box-image-background hidden'
  // Classe conditionnelle pour l'élément de la ligne
  const lineClass = isLineVisible ? 'box-line' : 'box-line hidden'

  return (
    <article className="box">
      {isHeaderVisible && ( // Condition pour rendre le box-header basé sur isHeaderVisible
        <div className="box-header">
          <h1 className="box-title">{title}</h1>
          <span className={lineClass}></span>
          {price && <div className="box-price">{price}</div>}
        </div>
      )}
      <div className="header-menu">
        {subtitle && <h2 className="box-subtitle">{subtitle}</h2>}
        <LikeButton itemId={id} />
      </div>
      {content && <div className="box-content">{content}</div>}
      <div className={backgroundClass}></div>
    </article>
  )
}

export default Box
