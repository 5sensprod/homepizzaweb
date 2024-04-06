import React from 'react'
import { useParams } from 'react-router-dom'
import { useMenuData } from '../../contexts/MenuDataContext'
import boxFactory from '../../factories/factory'
import SlideshowImage from '../ui/SlideshowImage'
import NewsTicker from '../widgets/NewsTicker'
import BoxHeader from '../ui/BoxHeader'
import formatPrice from '../../utils/formatPrice'

const MenuPage = () => {
  const { menuType } = useParams()
  const { paninisData, gratinsData } = useMenuData()

  let menuInfo
  switch (menuType) {
    case 'paninis':
      menuInfo = paninisData
      break
    case 'gratins':
      menuInfo = gratinsData
      break
    default:
      menuInfo = { items: [] }
  }

  const menuBoxes = boxFactory(menuInfo.items || [])

  // Utilise formatPrice ici pour formater le prix pour l'affichage
  const formattedPrice = menuInfo.price ? formatPrice(menuInfo.price) : ''

  return (
    <>
      <SlideshowImage />
      <NewsTicker />
      <BoxHeader
        title={menuInfo.title || 'Menu'}
        lineClass="box-line"
        price={formattedPrice}
      />
      {menuBoxes}
    </>
  )
}

export default MenuPage
