// src/contexts/ThemeContext.js

import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark') // Thème par défaut
  const [layout, setLayout] = useState('fixed') // Nouveau state pour le layout

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  const toggleLayout = () => {
    setLayout((currentLayout) =>
      currentLayout === 'fluid' ? 'fixed' : 'fluid',
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, layout, toggleLayout }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Hook personnalisé pour utiliser le contexte de thème et de layout
export const useTheme = () => useContext(ThemeContext)
