// src/components/Menu/index.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Menu = ({ isOpen, onClose }) => {
  const navigate = useNavigate()

  if (!isOpen) {
    return null
  }

  // Fonction pour gérer la navigation
  const handleNavigate = (menuType) => {
    navigate(`/menu/${menuType}`)
    onClose()
  }

  return (
    <div className="menu">
      <button onClick={onClose}>Fermer</button>
      <ul>
        <li>Menus</li>
        <li>Pizzas</li>
        <li onClick={() => handleNavigate('paninis')}>Paninis</li>
        <li onClick={() => handleNavigate('gratins')}>Gratins</li>
        <li>TexMex</li>
        <li>Zapwich</li>
        <li>Desserts</li>
        <li>Boissons</li>
      </ul>
    </div>
  )
}

export default Menu
