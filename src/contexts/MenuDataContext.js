import React, { createContext, useState, useEffect, useContext } from 'react'

// Création du Contexte
export const MenuDataContext = createContext()

// Fonction pour charger les données
const fetchData = async (dataType) => {
  if (process.env.REACT_APP_DATA_SOURCE === 'mock') {
    // Chargement depuis les fichiers JSON
    if (dataType === 'paninis') {
      return import('../data/paninisData.json')
    } else if (dataType === 'gratins') {
      return import('../data/gratinsData.json')
    }
  } else {
    // Chargement depuis l'API
    const response = await fetch(`https://monapi.com/${dataType}`)
    return await response.json()
  }
}

// Création du Provider
export const MenuDataProvider = ({ children }) => {
  const [paninisData, setPaninisData] = useState([])
  const [gratinsData, setGratinsData] = useState([])

  useEffect(() => {
    const loadMenuData = async () => {
      const paninis = await fetchData('paninis')
      const gratins = await fetchData('gratins')
      // Assurez-vous d'ajuster la logique selon la structure de vos données importées ou de l'API
      setPaninisData(paninis.default || paninis) // Prend en charge les deux structures
      setGratinsData(gratins.default || gratins)
    }

    loadMenuData()
  }, [])

  return (
    <MenuDataContext.Provider value={{ paninisData, gratinsData }}>
      {children}
    </MenuDataContext.Provider>
  )
}

// Hook personnalisé pour accéder au contexte de menu
export const useMenuData = () => {
  const context = useContext(MenuDataContext)
  if (context === undefined) {
    throw new Error('useMenuData must be used within a MenuDataProvider')
  }
  return context
}
