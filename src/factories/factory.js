// src/factories/factory.js
import React from 'react'
import Box from '../components/ui/Box'

const boxFactory = (boxData) => {
  return boxData.map((data) => (
    <div key={data.id}>
      {' '}
      {/* Enveloppe chaque Box dans une div */}
      <Box
        isHeaderVisible={false}
        title={data.title}
        subtitle={data.subtitle}
        price={data.price}
        isImageVisible={true}
        isLineVisible={true}
        content={data.content}
      />
    </div>
  ))
}

export default boxFactory
