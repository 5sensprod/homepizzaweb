import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import Header from '../Header'
import Footer from '../Footer'
import InfoComponent from '../box/InfoComponent'
import PizzeriaStatusWidget from '../widgets/PizzeriaStatusWidget'
import etoilePng from '../../assets/etoile.png'
import CheckmarkLabel from '../widgets/CheckmarkLabel'
import SidebarNav from '../Menu/SidebarNav'
import { Routes, Route } from 'react-router-dom'
import MenuPage from '../pages/MenuPage'

const Layout = () => {
  const { theme } = useTheme()
  const containerClass = `centered-container ${theme}`

  const handleMenuItemClick = (itemName) => {
    console.log(`${itemName} a été cliqué`)
  }

  return (
    <div className={containerClass}>
      <Header />
      <div className="layout-flex">
        <aside className="left-zone">
          <InfoComponent
            svg={etoilePng}
            text="LE CORBUSIER SAINT MEMMIE"
            phone="03 26 22 18 22"
          />
          <PizzeriaStatusWidget
            name="Saint-Memmie"
            isOpen={true}
            time="11:57"
          />
          <CheckmarkLabel text="À emporter" isChecked={true} />
          <CheckmarkLabel text="Livraison" />
          <CheckmarkLabel text="Sur place" isChecked={false} />
        </aside>
        <main className="center-zone">
          <Routes>
            <Route path="/menu/:menuType" element={<MenuPage />} />
          </Routes>
        </main>
        <aside className="right-zone">
          <SidebarNav onMenuItemClick={handleMenuItemClick} />
        </aside>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
