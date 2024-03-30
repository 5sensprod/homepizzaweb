import React, { useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import ThemeSwitcher from './ThemeSwitcher'

function ThemedApp() {
  const { theme } = useTheme()

  useEffect(() => {
    // Applique simplement la classe de thème au body
    document.body.className = theme
  }, [theme]) // Ce useEffect se déclenche à chaque changement de thème

  const appStyle = {
    padding: '20px',
  }

  return (
    <div style={appStyle}>
      <ThemeSwitcher />
    </div>
  )
}

export default ThemedApp
