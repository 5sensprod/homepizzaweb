import React from 'react'
import '../../styles/components/box.scss'

const Box = ({
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
    <div className="box">
      {isHeaderVisible && ( // Condition pour rendre le box-header basé sur isHeaderVisible
        <div className="box-header">
          <h2 className="box-title">{title}</h2>
          <span className={lineClass}></span>
          {price && <div className="box-price">{price}</div>}
        </div>
      )}
      {subtitle && <h3 className="box-subtitle">{subtitle}</h3>}
      {content && <div className="box-content">{content}</div>}
      <div className={backgroundClass}></div>
    </div>
  )
}

export default Box
