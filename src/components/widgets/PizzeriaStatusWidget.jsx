import React, { useState, useEffect } from 'react'
import { useCompanyData } from '../../contexts/CompanyDataContext'
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook-icon.svg'
import formatTime from '../../utils/formatTime'

const PizzeriaStatusWidget = () => {
  const { companyData } = useCompanyData()
  const [currentTime, setCurrentTime] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(formatTime(new Date()))
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const isOpenNow = () => {
      const now = new Date()
      const dayOfWeek = now.getDay()
      const currentDay = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
      ][dayOfWeek]
      const openingHoursToday = companyData.openingHours.find(
        (day) => day.day === currentDay,
      )

      if (!openingHoursToday.isOpen) return false

      const currentTimeStr =
        now.getHours() + ':' + now.getMinutes().toString().padStart(2, '0')
      return openingHoursToday.hours.some(
        ({ start, end }) => currentTimeStr >= start && currentTimeStr <= end,
      )
    }

    setIsOpen(isOpenNow())
  }, [companyData])

  return (
    <div className="pizzeria-status-widget">
      <div className="pizzeria-name">{companyData.name}</div>
      <button className="change-pizzeria-btn">Changer de pizzeria</button>
      <div className="status-and-social">
        <div className="status-line">
          <span>{isOpen ? 'Ouvert' : 'Fermé'}</span>
          <span
            className={`status-indicator ${isOpen ? 'open' : 'closed'}`}
          ></span>
        </div>
        <a href={companyData.socialMedia.facebook} className="pizzeria-social">
          <FacebookIcon />
        </a>
      </div>
      <div className="pizzeria-time">{currentTime}</div>
    </div>
  )
}

export default PizzeriaStatusWidget
