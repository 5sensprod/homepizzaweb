import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Menu = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    // Fonction pour gérer le clic en dehors du menu
    const handleOutsideClick = (event) => {
      // Obtenir l'élément DOM pour le menu
      const menuElement = document.querySelector('.menu')

      // Vérifier si le menu est ouvert et si le clic n'a pas eu lieu à l'intérieur du menu
      if (isOpen && menuElement && !menuElement.contains(event.target)) {
        onClose() // Appel de la fonction pour fermer le menu
      }
    }

    // Ajout de l'écouteur d'événements lors de l'ouverture du menu
    document.addEventListener('mousedown', handleOutsideClick)

    // Nettoyage de l'écouteur d'événements lors de la fermeture du menu ou du démontage du composant
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen, onClose]) // Dépendances à isOpen et onClose

  if (!isOpen) {
    return null
  }

  const handleNavigate = (menuType) => {
    navigate(`/menu/${menuType}`)
    onClose() // Ferme le menu après la navigation
  }

  const isActive = (menuType) => location.pathname.includes(`/menu/${menuType}`)

  return (
    <div className="menu">
      <ul>
        {/* <li>Menus</li>
        <li>Pizzas</li> */}
        <li
          className={isActive('paninis') ? 'active' : ''}
          onClick={() => handleNavigate('paninis')}
        >
          Paninis
        </li>
        <li
          className={isActive('gratins') ? 'active' : ''}
          onClick={() => handleNavigate('gratins')}
        >
          Gratins
        </li>
        {/* <li>TexMex</li>
        <li>Zapwich</li>
        <li>Desserts</li>
        <li>Boissons</li> */}
      </ul>
    </div>
  )
}

export default Menu
