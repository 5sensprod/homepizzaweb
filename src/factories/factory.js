import React from 'react'
import Box from '../components/ui/Box'

const boxFactory = (boxData) => {
  return boxData.map((data, index) => (
    <Box
      key={index}
      isHeaderVisible={false}
      title={data.title}
      subtitle={data.subtitle}
      price={data.price}
      isImageVisible={true}
      isLineVisible={true}
      content={data.content}
    />
  ))
}

export default boxFactory
