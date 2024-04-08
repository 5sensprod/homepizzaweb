import React from 'react'
import { useMenuInfo } from '../../hooks/useMenuInfo'
import boxFactory from '../../factories/factory'
import SlideshowImage from '../ui/SlideshowImage'
import NewsTicker from '../widgets/NewsTicker'
import BoxHeader from '../ui/BoxHeader'
import formatPrice from '../../utils/formatPrice'
import Slider from 'react-slick'

const MenuPage = () => {
  const menuInfo = useMenuInfo()
  const formattedPrice = menuInfo.price ? formatPrice(menuInfo.price) : ''
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // slidesToShow: 3,
    // slidesToScroll: 3,
  }

  // Utilise boxFactory pour générer les éléments, puis enveloppe chacun dans une div
  const menuBoxes = boxFactory(menuInfo.items || [], {
    categoryTitle: menuInfo.title,
    categoryPrice: formattedPrice,
  }).map((boxElement, index) => <div key={index}>{boxElement}</div>)

  return (
    <>
      <SlideshowImage />
      <NewsTicker />
      <section>
        <BoxHeader
          title={menuInfo.title}
          lineClass="box-line"
          price={formattedPrice}
        />
        <Slider {...settings}>{menuBoxes}</Slider>
      </section>
    </>
  )
}

export default MenuPage
