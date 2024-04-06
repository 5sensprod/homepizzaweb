import React from 'react'
import { useParams } from 'react-router-dom'
import { useMenuData } from '../../contexts/MenuDataContext'
import boxFactory from '../../factories/factory'
import SlideshowImage from '../ui/SlideshowImage'
import NewsTicker from '../widgets/NewsTicker'
import BoxHeader from '../ui/BoxHeader'

const MenuPage = () => {
  const { menuType } = useParams()
  const { paninisData, gratinsData } = useMenuData()

  let menuData
  switch (menuType) {
    case 'paninis':
      menuData = paninisData
      break
    case 'gratins':
      menuData = gratinsData
      break
    // Ajoute des cases pour d'autres types de menus ici
    default:
      menuData = []
  }

  const menuBoxes = boxFactory(menuData)
  // Supposons que le premier élément contienne les infos générales du menu pour BoxHeader
  const firstItem = menuData[0] || {}

  return (
    <>
      <SlideshowImage />
      <NewsTicker />
      <BoxHeader
        title={firstItem.title || 'Menu'}
        lineClass="box-line"
        price={firstItem.price || ''}
      />
      {menuBoxes}
    </>
  )
}

export default MenuPage
