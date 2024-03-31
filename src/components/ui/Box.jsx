import React from 'react'
import '../../styles/components/box.scss'

const Box = ({ title, subtitle, price, children }) => {
  return (
    <div className="box">
      <div className="box-header">
        <h2 className="box-title">{title}</h2>
        <span className="box-line"></span>{' '}
        {/* Élément pour la ligne hachurée */}
        {price && <div className="box-price">{price}</div>}
      </div>
      {subtitle && <h3 className="box-subtitle">{subtitle}</h3>}
      <div className="box-content">{children}</div>
    </div>
  )
}

export default Box
