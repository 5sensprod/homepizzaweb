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
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  )
}

export default Menu
