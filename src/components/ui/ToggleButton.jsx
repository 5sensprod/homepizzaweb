import React from 'react'
import { useTheme } from '../../contexts/ThemeContext' // Assurez-vous que le chemin est correct
import { ReactComponent as SunSvg } from '../../assets/sun.svg'
import { ReactComponent as MoonSvg } from '../../assets/moon.svg'

const ToggleButton = ({ isOn, onClick }) => {
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
        <SunSvg className={`sun-icon ${theme}`} />
        <MoonSvg className={`moon-icon ${theme}`} />
      </label>
    </>
  )
}

export default ToggleButton
