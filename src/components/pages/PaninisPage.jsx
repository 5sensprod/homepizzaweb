import React from 'react'
import boxFactory from '../../factories/factory'
import paninisData from '../../data/paninisData.json' // Import direct du fichier JSON
import BoxHeader from '../ui/BoxHeader'
import SlideshowImage from '../ui/SlideshowImage'
import NewsTicker from '../widgets/NewsTicker'

const PaninisPage = () => {
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
