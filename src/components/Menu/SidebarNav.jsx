import React from 'react'
import { ReactComponent as PizzaIcon } from '../../assets/icons/pizza-icon.svg'
import { ReactComponent as MenuDinishIcon } from '../../assets/icons/menu-dinish-icon.svg'
import { ReactComponent as PaniniIcon } from '../../assets/icons/panini-icon.svg'
import { ReactComponent as GratinIcon } from '../../assets/icons/gratin-icon.svg'
import { ReactComponent as TexMexIcon } from '../../assets/icons/texmex-icon.svg'
import { ReactComponent as ZapwishIcon } from '../../assets/icons/zapwish-icon.svg'
import { ReactComponent as DessertIcon } from '../../assets/icons/dessert-icon.svg'
import { ReactComponent as DrinkIcon } from '../../assets/icons/drink-icon.svg'

import { useNavigate } from 'react-router-dom'
// Les imports des icônes restent inchangés...

const SidebarNav = () => {
  const navigate = useNavigate()

  const onMenuItemClick = (menuType) => {
    navigate(`/menu/${menuType}`)
  }
  return (
    <nav className="sidebar-nav">
      <ul>
        <li onClick={() => onMenuItemClick('pizzas')}>
          <PizzaIcon />
          <span>Pizzas</span>
        </li>
        <li onClick={() => onMenuItemClick('menus')}>
          <MenuDinishIcon />
          <span>Menus</span>
        </li>
        <li onClick={() => onMenuItemClick('paninis')}>
          <PaniniIcon />
          <span>Paninis</span>
        </li>
        <li onClick={() => onMenuItemClick('gratins')}>
          <GratinIcon />
          <span>Gratins</span>
        </li>
        <li onClick={() => onMenuItemClick('texmex')}>
          <TexMexIcon />
          <span>TexMex</span>
        </li>
        <li onClick={() => onMenuItemClick('zapwish')}>
          <ZapwishIcon />
          <span>Zapwish</span>
        </li>
        <li onClick={() => onMenuItemClick('desserts')}>
          <DessertIcon />
          <span>Desserts</span>
        </li>
        <li onClick={() => onMenuItemClick('boissons')}>
          <DrinkIcon />
          <span>Boissons</span>
        </li>
      </ul>
    </nav>
  )
}

export default SidebarNav
