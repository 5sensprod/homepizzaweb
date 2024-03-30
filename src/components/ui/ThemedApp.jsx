import React, { useEffect } from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import ThemeSwitcher from './ThemeSwitcher'

function ThemedApp() {
  const { theme } = useTheme()

  useEffect(() => {
    document.body.className = theme
    // Cette classe est ajoutée une seule fois
  }, [theme])

  useEffect(() => {
    // Ajoute la transition une seule fois au chargement de l'application
    document.body.classList.add('theme-transition')
  }, [])

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
