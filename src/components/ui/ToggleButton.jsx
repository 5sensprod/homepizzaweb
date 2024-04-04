import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const ToggleButton = ({ isOn, onClick, SunIcon, MoonIcon }) => {
  const { theme } = useTheme()

  return (
    <>
      <input
        type="checkbox"
        id="toggle-button"
        className="toggle-button-input"
        checked={isOn}
        onChange={onClick}
      />
      <label htmlFor="toggle-button" className="toggle-button-label">
        <SunIcon className={`sun-icon ${theme}`} />
        <MoonIcon className={`moon-icon ${theme}`} />
      </label>
    </>
  )
}

export default ToggleButton
