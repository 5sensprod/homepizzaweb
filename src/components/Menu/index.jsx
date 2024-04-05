// src/components/Menu/index.jsx
import React from 'react'

const Menu = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="menu">
      <button onClick={onClose}>Fermer</button>
      <ul>
        <li>Menus</li>
        <li>Pizzas</li>
        <li>Paninis</li>
        <li>Gratins</li>
        <li>TexMex</li>
        <li>Zapwich</li>
        <li>Desserts</li>
        <li>Boissons</li>
      </ul>
    </div>
  )
}

export default Menu
