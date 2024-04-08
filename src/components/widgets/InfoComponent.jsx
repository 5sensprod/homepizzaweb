import React from 'react'
import { useCompanyData } from '../../contexts/CompanyDataContext'
import etoilePng from '../../assets/etoile.png'

const InfoComponent = () => {
  const { companyData } = useCompanyData()

  return (
    <div className="info-component">
      <img src={etoilePng} className="svg-icon" alt="Icône étoile" />
      <div className="content">
        <div className="text">{companyData.name}</div>
        <div className="phone">{companyData.phone}</div>
      </div>
    </div>
  )
}

export default InfoComponent
