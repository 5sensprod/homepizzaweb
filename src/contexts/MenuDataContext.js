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
      try {
        const paninis = await fetchData('paninis')
        const gratins = await fetchData('gratins')

        console.log('Paninis Data:', paninis) // Ajoutez cette ligne pour le débogage
        console.log('Gratins Data:', gratins) // Ajoutez cette ligne pour le débogage

        setPaninisData(paninis.default || paninis)
        setGratinsData(gratins.default || gratins)
      } catch (error) {
        console.error('Erreur lors du chargement des données du menu:', error)
      }
    }

    loadMenuData()
  }, [])

  return (
    <MenuDataContext.Provider
      value={{ paninisData, setPaninisData, gratinsData, setGratinsData }}
    >
      {' '}
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
