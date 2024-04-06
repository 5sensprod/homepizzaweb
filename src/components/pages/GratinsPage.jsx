import React from 'react'
import boxFactory from '../../factories/factory'
import { gratinsData } from '../../data/data'
import BoxHeader from '../ui/BoxHeader'
import SlideshowImage from '../ui/SlideshowImage'
import NewsTicker from '../widgets/NewsTicker'

const GratinsPage = () => {
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
