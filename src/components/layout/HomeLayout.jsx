// src/components/layout/HomeLayout.jsx
import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import Header from '../Header'
import Footer from '../Footer'
import HomePage from '../pages/HomePage'

const HomeLayout = () => {
  const { theme } = useTheme() // Récupération du thème depuis le contexte
  const containerClass = `centered-container ${theme}` // Application de la classe de thème

  return (
    <div className={containerClass}>
      <Header />
      <main className="center-zone">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}

export default HomeLayout
