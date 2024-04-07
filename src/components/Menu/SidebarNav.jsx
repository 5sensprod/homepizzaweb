import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as PizzaIcon } from '../../assets/icons/pizza-icon.svg'
import { ReactComponent as MenuDinishIcon } from '../../assets/icons/menu-dinish-icon.svg'
import { ReactComponent as PaniniIcon } from '../../assets/icons/panini-icon.svg'
import { ReactComponent as GratinIcon } from '../../assets/icons/gratin-icon.svg'
import { ReactComponent as TexMexIcon } from '../../assets/icons/texmex-icon.svg'
import { ReactComponent as ZapwishIcon } from '../../assets/icons/zapwish-icon.svg'
import { ReactComponent as DessertIcon } from '../../assets/icons/dessert-icon.svg'
import { ReactComponent as DrinkIcon } from '../../assets/icons/drink-icon.svg'

const SidebarNav = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const onMenuItemClick = (menuType) => {
    navigate(`/menu/${menuType}`)
  }

  const isActive = (menuType) => {
    return location.pathname.includes(`/menu/${menuType}`)
  }

  return (
    <nav className="sidebar-nav">
      <ul>
        <li
          className={isActive('pizzas') ? 'active' : ''}
          onClick={() => onMenuItemClick('pizzas')}
        >
          <PizzaIcon />
          <span>Pizzas</span>
        </li>
        <li
          className={isActive('menus') ? 'active' : ''}
          onClick={() => onMenuItemClick('menus')}
        >
          <MenuDinishIcon />
          <span>Menus</span>
        </li>
        <li
          className={isActive('paninis') ? 'active' : ''}
          onClick={() => onMenuItemClick('paninis')}
        >
          <PaniniIcon />
          <span>Paninis</span>
        </li>
        <li
          className={isActive('gratins') ? 'active' : ''}
          onClick={() => onMenuItemClick('gratins')}
        >
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
