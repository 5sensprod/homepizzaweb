import React from 'react'
import '../../styles/components/card.scss'

const Card = ({ title, description }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  )
}

export default Card
