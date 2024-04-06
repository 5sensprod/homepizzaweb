import React from 'react'
import { useMenuInfo } from '../../hooks/useMenuInfo'
import boxFactory from '../../factories/factory'
import SlideshowImage from '../ui/SlideshowImage'
import NewsTicker from '../widgets/NewsTicker'
import BoxHeader from '../ui/BoxHeader'
import formatPrice from '../../utils/formatPrice'

const MenuPage = () => {
  const menuInfo = useMenuInfo()
  const menuBoxes = boxFactory(menuInfo.items || [])
  const formattedPrice = menuInfo.price ? formatPrice(menuInfo.price) : ''

  return (
    <>
      <SlideshowImage />
      <NewsTicker />
      <BoxHeader
        title={menuInfo.title}
        lineClass="box-line"
        price={formattedPrice}
      />
      {menuBoxes}
    </>
  )
}

export default MenuPage
