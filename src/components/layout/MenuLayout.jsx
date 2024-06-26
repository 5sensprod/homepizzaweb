// src/components/layout/MenuLayout.jsx
import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import Header from '../Header'
import Footer from '../Footer'
import InfoComponent from '../widgets/InfoComponent'
import PizzeriaStatusWidget from '../widgets/PizzeriaStatusWidget'
import CheckmarkLabel from '../widgets/CheckmarkLabel'
import SidebarNav from '../Menu/SidebarNav'

const MenuLayout = ({ children }) => {
  const { theme } = useTheme()
  const containerClass = `centered-container ${theme}`

  return (
    <div className={containerClass}>
      <Header />
      <div className="layout-flex">
        <aside className="left-zone">
          <InfoComponent />
          <PizzeriaStatusWidget />
          <CheckmarkLabel text="À emporter" isChecked={true} />
          <CheckmarkLabel text="Livraison" />
          <CheckmarkLabel text="Sur place" isChecked={false} />
        </aside>
        <main className="center-zone">{children}</main>
        <aside className="right-zone">
          <SidebarNav />
        </aside>
      </div>
      <Footer />
    </div>
  )
}

export default MenuLayout
