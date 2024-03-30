import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} aria-label="Basculer le thème">
      Basculer en mode {theme === 'light' ? 'dark' : 'light'}
    </button>
  )
}

export default ThemeSwitcher
