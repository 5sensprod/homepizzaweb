import React, { useState } from 'react'
import { ReactComponent as MenuIcon } from '../../assets/icons/menu_icon_hand_drawn-min.svg'
import { ReactComponent as PizzaScooterIcon } from '../../assets/icons/pizza_scooter_icon_hand_drawn.svg'
import Menu from '../Menu'
import CartBadge from '../ui/CartBadge'
import CartDetails from '../cart'

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isCartOpen, setCartOpen] = useState(false)

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen)
  }

  const handlePizzaScooterClick = () => setCartOpen(!isCartOpen)

  const handleCloseMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navigation">
      <MenuIcon onClick={handleMenuClick} />
      <div style={{ position: 'relative' }}>
        <PizzaScooterIcon onClick={handlePizzaScooterClick} />
        <CartBadge />
        {isCartOpen && <CartDetails />}
      </div>
      <Menu isOpen={isMenuOpen} onClose={handleCloseMenu} />
    </nav>
  )
}

export default Navigation
