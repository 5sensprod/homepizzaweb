import React, { useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import ThemeSwitcher from './ThemeSwitcher'

function ThemedApp() {
  const { theme } = useTheme()

  useEffect(() => {
    document.body.className = theme
  }, [theme])

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
