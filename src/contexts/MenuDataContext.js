import React, { createContext, useContext, useState, useEffect } from 'react'
import { getPaninisData, getGratinsData } from '../data/data' // Ajustez le chemin selon votre structure

const MenuDataContext = createContext()

export const useMenuData = () => useContext(MenuDataContext)

export const MenuDataProvider = ({ children }) => {
  const [paninis, setPaninis] = useState([])
  const [gratins, setGratins] = useState([])

  useEffect(() => {
    getPaninisData().then(setPaninis).catch(console.error)
    getGratinsData().then(setGratins).catch(console.error)
  }, [])

  return (
    <MenuDataContext.Provider value={{ paninis, gratins }}>
      {children}
    </MenuDataContext.Provider>
  )
}
