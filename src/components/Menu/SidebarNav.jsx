import React, { useEffect, useRef } from 'react'
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
  const listRef = useRef(null)

  const onMenuItemClick = (menuType) => {
    navigate(`/menu/${menuType}`)
  }

  const isActive = (menuType) => {
    return location.pathname.includes(`/menu/${menuType}`)
  }

  useEffect(() => {
    if (listRef.current) {
      const activeItem = listRef.current.querySelector('.active')
      if (activeItem) {
        setTimeout(() => {
          activeItem.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'start',
          })
        }, 0) // Un délai de 0 ms signifie que cela s'exécutera dès que la pile d'appels sera vide.
      }
    }
  }, [location.pathname])

  return (
    <nav className="sidebar-nav">
      <ul ref={listRef}>
        <li
          className={isActive('pizzas') ? 'active' : ''}
          onClick={() => onMenuItemClick('pizzas')}
        >
          <PizzaIcon />
          <span>Pizzas</span>
        </li>
        {/* Répéter pour les autres éléments de menu, en appliquant la même logique */}
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
        <li
          className={isActive('texmex') ? 'active' : ''}
          onClick={() => onMenuItemClick('texmex')}
        >
          <TexMexIcon />
          <span>TexMex</span>
        </li>
        <li
          className={isActive('zapwish') ? 'active' : ''}
          onClick={() => onMenuItemClick('zapwish')}
        >
          <ZapwishIcon />
          <span>Zapwish</span>
        </li>
        <li
          className={isActive('desserts') ? 'active' : ''}
          onClick={() => onMenuItemClick('desserts')}
        >
          <DessertIcon />
          <span>Desserts</span>
        </li>
        <li
          className={isActive('boissons') ? 'active' : ''}
          onClick={() => onMenuItemClick('boissons')}
        >
          <DrinkIcon />
          <span>Boissons</span>
        </li>
      </ul>
    </nav>
  )
}

export default SidebarNav
