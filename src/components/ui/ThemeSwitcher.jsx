import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      Basculer en mode {theme === 'light' ? 'dark' : 'light'}
    </button>
  )
}

export default ThemeSwitcher
