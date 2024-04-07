import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Menu = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  const location = useLocation()

  if (!isOpen) {
    return null
  }

  const handleNavigate = (menuType) => {
    navigate(`/menu/${menuType}`)
    onClose()
  }

  const isActive = (menuType) => location.pathname.includes(`/menu/${menuType}`)

  return (
    <div className="menu">
      <button onClick={onClose}>Fermer</button>
      <ul>
        {/* <li>Menus</li>
        <li>Pizzas</li> */}
        <li
          className={isActive('paninis') ? 'active' : ''}
          onClick={() => handleNavigate('paninis')}
        >
          Paninis
        </li>
        <li
          className={isActive('gratins') ? 'active' : ''}
          onClick={() => handleNavigate('gratins')}
        >
          Gratins
        </li>
        {/* <li>TexMex</li>
        <li>Zapwich</li>
        <li>Desserts</li>
        <li>Boissons</li> */}
      </ul>
    </div>
  )
}

export default Menu
