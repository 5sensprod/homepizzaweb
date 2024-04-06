import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import Header from '../Header'
import Footer from '../Footer'
// import Card from '../ui/Card'
import Box from '../ui/Box'
import BorderFrame from '../ui/BorderFrame'
import InfoComponent from '../box/InfoComponent'
import PizzeriaStatusWidget from '../widgets/PizzeriaStatusWidget'
import etoilePng from '../../assets/etoile.png'
import CheckmarkLabel from '../widgets/CheckmarkLabel'
import SidebarNav from '../Menu/SidebarNav'
import BoxHeader from '../ui/BoxHeader'
import SlideshowImage from '../ui/SlideshowImage'
import NewsTicker from '../widgets/NewsTicker'

const Layout = () => {
  const { theme } = useTheme()
  const containerClass = `centered-container ${theme}`

  const handleMenuItemClick = (itemName) => {
    console.log(`${itemName} a été cliqué`)
    // Autre logique de gestion du clic sur les éléments de menu
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
          <SlideshowImage />
          <NewsTicker />
          <BoxHeader title="PANINIS" lineClass="box-line" price="8,50 €" />
          <BorderFrame bottom left>
            <Box
              isHeaderVisible={false}
              title="PANINIS"
              subtitle="Fermier"
              price="8,50 €"
              isImageVisible={true}
              isLineVisible={true}
              content="Crème fraîche, fromage et poulet nature"
            />
          </BorderFrame>
          <div className="bottom-zone">
            <Box
              isHeaderVisible={false}
              title="PANINIS"
              subtitle="Chèvre"
              price="8,50 €"
              isImageVisible={true}
              isLineVisible={true}
              content="Crème fraîche, fromage et chèvre"
            />
            <Box
              isHeaderVisible={false}
              title="PANINIS"
              subtitle="Nutella"
              price="8,50 €"
              isImageVisible={true}
              isLineVisible={true}
              content="Crème fraîche, Nutella et sucre"
            />
          </div>
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
