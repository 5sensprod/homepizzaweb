import React from 'react'
import { ReactComponent as PizzaIcon } from '../../assets/icons/pizza-icon.svg'
import { ReactComponent as PaniniIcon } from '../../assets/icons/panini-icon.svg'
import { ReactComponent as GratinIcon } from '../../assets/icons/gratin-icon.svg'
import { ReactComponent as DessertIcon } from '../../assets/icons/dessert-icon.svg'
import { ReactComponent as DrinkIcon } from '../../assets/icons/dessert-icon.svg'
import { ReactComponent as ZapwishIcon } from '../../assets/icons/zapwish-icon.svg'
import { ReactComponent as TexMexIcon } from '../../assets/icons/texmex-icon.svg'
import { ReactComponent as MenuDinishIcon } from '../../assets/icons/menu-dinish-icon.svg'
// ... Importez d'autres icônes de même manière

const SidebarNav = () => {
  return (
    <nav className="sidebar-nav">
      <ul>
        <li>
          <PizzaIcon /> Pizzas
        </li>
        <li>
          <MenuDinishIcon /> Menus
        </li>
        <li>
          <PaniniIcon /> Paninis
        </li>
        <li>
          <GratinIcon /> Gratins
        </li>
        <li>
          <TexMexIcon /> TexMex
        </li>
        <li>
          <ZapwishIcon /> Zapwish
        </li>
        <li>
          <DessertIcon /> Desserts
        </li>
        <li>
          <DrinkIcon /> Boissons
        </li>
      </ul>
    </nav>
  )
}

export default SidebarNav
