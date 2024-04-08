import React, { useState } from 'react'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu_icon_hand_drawn-min.svg'
import { ReactComponent as PizzaScooterIcon } from '../../assets/icons/pizza_scooter_icon_hand_drawn.svg'
import Menu from '../Menu'
import CartBadge from '../ui/CartBadge'

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
      {/* Positionnez le CartBadge à proximité de l'icône scooter */}
      <div style={{ position: 'relative' }}>
        <PizzaScooterIcon onClick={handlePizzaScooterClick} />
        <CartBadge /> {/* Ajoutez le CartBadge ici */}
      </div>
      <Menu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </nav>
  )
}

export default Navigation
