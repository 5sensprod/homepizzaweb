import React from 'react'
import { useMenuData } from '../../contexts/MenuDataContext'
import boxFactory from '../../factories/factory'
import BoxHeader from '../ui/BoxHeader'
import SlideshowImage from '../ui/SlideshowImage'
import NewsTicker from '../widgets/NewsTicker'

const GratinsPage = () => {
  const { gratinsData } = useMenuData()
  const gratinsBoxes = boxFactory(gratinsData)

  return (
    <>
      <SlideshowImage />
      <NewsTicker />
      <BoxHeader title="GRATINS" lineClass="box-line" price="9,50 €" />
      {gratinsBoxes}
    </>
  )
}

export default GratinsPage
