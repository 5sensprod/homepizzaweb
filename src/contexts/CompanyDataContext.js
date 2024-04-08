import React, { createContext, useContext, useState } from 'react'
import initialCompanyData from '../data/companyData.json'

export const CompanyDataContext = createContext()

export const CompanyDataProvider = ({ children }) => {
  const [companyData, setCompanyData] = useState(initialCompanyData)
  console.log(companyData)

  return (
    <CompanyDataContext.Provider value={{ companyData, setCompanyData }}>
      {children}
    </CompanyDataContext.Provider>
  )
}

export const useCompanyData = () => {
  const context = useContext(CompanyDataContext)
  if (!context) {
    throw new Error('useCompanyData must be used within a CompanyDataProvider')
  }
  return context
}
