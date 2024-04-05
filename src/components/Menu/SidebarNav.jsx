import React from 'react'
import { ReactComponent as PizzaIcon } from '../../assets/icons/pizza-icon.svg'
import { ReactComponent as MenuDinishIcon } from '../../assets/icons/menu-dinish-icon.svg'
import { ReactComponent as PaniniIcon } from '../../assets/icons/panini-icon.svg'
import { ReactComponent as GratinIcon } from '../../assets/icons/gratin-icon.svg'
import { ReactComponent as TexMexIcon } from '../../assets/icons/texmex-icon.svg'
import { ReactComponent as ZapwishIcon } from '../../assets/icons/zapwish-icon.svg'
import { ReactComponent as DessertIcon } from '../../assets/icons/dessert-icon.svg'
import { ReactComponent as DrinkIcon } from '../../assets/icons/drink-icon.svg'

const SidebarNav = ({ onMenuItemClick }) => {
  return (
    <nav className="sidebar-nav">
      <ul>
        <li onClick={() => onMenuItemClick('Pizzas')}>
          <PizzaIcon />
          <span>Pizzas</span>
        </li>
        <li onClick={() => onMenuItemClick('Menus')}>
          <MenuDinishIcon />
          <span>Menus</span>
        </li>
        <li onClick={() => onMenuItemClick('Paninis')}>
          <PaniniIcon />
          <span>Paninis</span>
        </li>
        <li onClick={() => onMenuItemClick('Gratins')}>
          <GratinIcon />
          <span>Gratins</span>
        </li>
        <li onClick={() => onMenuItemClick('TexMex')}>
          <TexMexIcon />
          <span>TexMex</span>
        </li>
        <li onClick={() => onMenuItemClick('Zapwish')}>
          <ZapwishIcon />
          <span>Zapwish</span>
        </li>
        <li onClick={() => onMenuItemClick('Desserts')}>
          <DessertIcon />
          <span>Desserts</span>
        </li>
        <li onClick={() => onMenuItemClick('Boissons')}>
          <DrinkIcon />
          <span>Boissons</span>
        </li>
      </ul>
    </nav>
  )
}

export default SidebarNav
