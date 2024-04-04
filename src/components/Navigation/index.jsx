// src/components/Navigation/index.jsx
import React, { useState } from 'react'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu_icon_hand_drawn-min.svg'
import { ReactComponent as PizzaScooterIcon } from '../../assets/icons/pizza_scooter_icon_hand_drawn.svg'
import Menu from '../Menu' // Assurez-vous que le chemin d'importation est correct

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen)
  }

  const handlePizzaScooterClick = () => {
    console.log('Pizza Scooter Icon Clicked')
  }

  const handleCloseMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navigation">
      <MenuIcon onClick={handleMenuClick} />
      <PizzaScooterIcon onClick={handlePizzaScooterClick} />
      <Menu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </nav>
  )
}

export default Navigation
