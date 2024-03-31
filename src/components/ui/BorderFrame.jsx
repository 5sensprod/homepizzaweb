import React from 'react'
import '../../styles/components/borderFrame.scss'

const BorderFrame = ({ children, top, bottom, left, right }) => {
  return (
    <div className="border-frame">
      {top && <div className="border-top" />}
      {bottom && <div className="border-bottom" />}
      {left && <div className="border-left" />}
      {right && <div className="border-right" />}
      <div className="content">{children}</div>
    </div>
  )
}

export default BorderFrame
