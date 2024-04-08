// src/factories/factory.js
import React from 'react'
import Box from '../components/ui/Box'

const boxFactory = (boxData, { categoryTitle, categoryPrice }) => {
  return boxData.map((data) => (
    <div key={data.id}>
      <Box
        id={data.id}
        isHeaderVisible={false}
        subtitle={data.subtitle}
        content={data.content}
        isImageVisible={true}
        isLineVisible={true}
        categoryTitle={categoryTitle}
        categoryPrice={categoryPrice}
      />
    </div>
  ))
}

export default boxFactory
