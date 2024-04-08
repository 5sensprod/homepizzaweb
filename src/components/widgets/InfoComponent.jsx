import React from 'react'
import { useCompanyData } from '../../contexts/CompanyDataContext'
import etoilePng from '../../assets/etoile.png'

const InfoComponent = () => {
  const { companyData } = useCompanyData()

  // Concaténer name et location pour former le texte
  const displayText = `${companyData.name} ${companyData.location}`

  return (
    <div className="info-component">
      <img src={etoilePng} className="svg-icon" alt="Icône étoile" />
      <div className="content">
        <div className="text">{displayText}</div>
        <div className="phone">{companyData.phone}</div>
      </div>
    </div>
  )
}

export default InfoComponent
