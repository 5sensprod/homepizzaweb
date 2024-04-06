import React from 'react'
import '../../styles/ui/boxHeader.scss'

const BoxHeader = ({ title, lineClass, price }) => {
  return (
    <div className="box-header-wrapper">
      <h1 className="box-header-title">{title}</h1>
      <span className={lineClass}></span>
      {price && <div className="box-header-price">{price}</div>}
    </div>
  )
}

export default BoxHeader
