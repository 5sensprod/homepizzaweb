import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import ToggleButton from './ToggleButton'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  const isDarkModeOn = theme === 'dark'

  return (
    <ToggleButton
      isOn={isDarkModeOn}
      onClick={toggleTheme}
      labels={{ on: 'Sombre', off: 'Clair' }}
      disableHover={true}
      disableTap={false}
    />
  )
}

export default ThemeSwitcher
