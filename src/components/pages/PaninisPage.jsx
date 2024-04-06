import React from 'react'
import boxFactory from '../../factories/factory'
import BoxHeader from '../ui/BoxHeader'
import SlideshowImage from '../ui/SlideshowImage'
import NewsTicker from '../widgets/NewsTicker'
import { useMenuData } from '../../contexts/MenuDataContext'

const PaninisPage = () => {
  const { paninisData } = useMenuData()
  const paninisBoxes = boxFactory(paninisData)

  return (
    <>
      <SlideshowImage />
      <NewsTicker />
      <BoxHeader title="PANINIS" lineClass="box-line" price="8,50 €" />
      {paninisBoxes}
    </>
  )
}

export default PaninisPage
