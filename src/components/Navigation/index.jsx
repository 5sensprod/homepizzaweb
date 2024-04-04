// src/components/Navigation/index.jsx
import React from 'react'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu_icon_hand_drawn-min.svg'
import { ReactComponent as PizzaScooterIcon } from '../../assets/icons/pizza_scooter_icon_hand_drawn.svg'

const Navigation = () => {
  const handleMenuClick = () => {
    console.log('Menu Icon Clicked')
  }

  const handlePizzaScooterClick = () => {
    console.log('Pizza Scooter Icon Clicked')
  }

  return (
    <nav className="navigation">
      <MenuIcon onClick={handleMenuClick} />
      <PizzaScooterIcon onClick={handlePizzaScooterClick} />
    </nav>
  )
}

export default Navigation
