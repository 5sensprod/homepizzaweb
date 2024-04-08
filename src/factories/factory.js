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
        categoryTitle={categoryTitle} // Nouveau: passe le titre de la catégorie
        categoryPrice={categoryPrice} // Nouveau: passe le prix de la catégorie
      />
    </div>
  ))
}

export default boxFactory
