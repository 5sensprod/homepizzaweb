import React, { useState, useEffect } from 'react'
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook-icon.svg'

const PizzeriaStatusWidget = ({ name, isOpen }) => {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      )
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="pizzeria-status-widget">
      <div className="pizzeria-name">{name}</div>
      <button className="change-pizzeria-btn">Changer de pizzeria</button>
      <div className="status-and-social">
        <div className="status-line">
          {isOpen ? (
            <>
              <span>Ouvert</span>
              <span className="status-indicator open"></span>
            </>
          ) : (
            <>
              <span>Fermé</span>
              <span className="status-indicator closed"></span>
            </>
          )}
        </div>
        <div className="pizzeria-social">
          <FacebookIcon />
        </div>
      </div>
      <div className="pizzeria-time">{currentTime}</div>
    </div>
  )
}

export default PizzeriaStatusWidget
