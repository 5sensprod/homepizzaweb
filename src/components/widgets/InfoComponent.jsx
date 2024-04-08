import React from 'react'

const InfoComponent = ({ svg, text, phone }) => {
  return (
    <div className="info-component">
      <img src={svg} className="svg-icon" alt="Icone" />
      <div className="content">
        <div className="text">{text}</div>
        <div className="phone">{phone}</div>
      </div>
    </div>
  )
}

export default InfoComponent
