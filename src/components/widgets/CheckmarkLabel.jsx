import React from 'react'
import { ReactComponent as CheckIcon } from '../../assets/icons/check.svg'

const CheckmarkLabel = ({ text, isChecked }) => {
  return (
    <div className="checkmark-label">
      <span className="checkmark-text">{text}</span>
      <CheckIcon
        className={`checkmark-icon ${isChecked ? '' : 'greyed-out'}`}
      />
    </div>
  )
}

CheckmarkLabel.defaultProps = {
  isChecked: true,
}

export default CheckmarkLabel
