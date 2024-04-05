import React from 'react'
import { ReactComponent as PizzaIcon } from '../../assets/icons/pizza-icon.svg'
import { ReactComponent as PaniniIcon } from '../../assets/icons/panini-icon.svg'
import { ReactComponent as GratinIcon } from '../../assets/icons/gratin-icon.svg'
// ... Importez d'autres icônes de même manière

const SidebarNav = () => {
  return (
    <nav className="sidebar-nav">
      <ul>
        <li>
          <PizzaIcon /> Pizzas
        </li>
        <li>
          <PaniniIcon /> Paninis
        </li>
        <li>
          <GratinIcon /> Gratins
        </li>
        {/* Ajoutez d'autres éléments de menu ici */}
        {/* Utilisez les noms de fichiers icones appropriés */}
      </ul>
    </nav>
  )
}

export default SidebarNav
