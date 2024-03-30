import React, { useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import ThemeSwitcher from './ThemeSwitcher'

function ThemedApp() {
  const { theme } = useTheme()

  useEffect(() => {
    document.body.className = theme
    document.body.classList.add('theme-transition')
  }, [theme])

  const appStyle = {
    transition: 'all 0.25s ease',
    padding: '20px',
  }

  return (
    <div style={appStyle}>
      <ThemeSwitcher />
      {/* Autres composants de votre application */}
    </div>
  )
}

export default ThemedApp
