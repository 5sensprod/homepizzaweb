// src/components/ui/QuantityAdjuster.jsx
import React from 'react'
import '../../styles/ui/quantityAdjuster.scss'

const QuantityAdjuster = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="quantity-adjuster">
      <button onClick={onDecrease}>-</button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  )
}

export default QuantityAdjuster
