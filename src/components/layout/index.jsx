import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import Header from '../Header'
import Footer from '../Footer'
import Card from '../ui/Card'
import Box from '../ui/Box'
import BorderFrame from '../ui/BorderFrame'

const Layout = ({ children }) => {
  const { theme } = useTheme()
  const containerClass = `centered-container ${theme}`

  return (
    <div className={containerClass}>
      <Header />
      <BorderFrame bottom left>
        <Box
          title="PANINIS"
          subtitle="Fermier"
          price="8,50 €"
          isVisible={true}
          isLineVisible={true}
        >
          <p>Crème fraîche, fromage et poulet nature</p>
        </Box>
      </BorderFrame>
      <BorderFrame bottom left>
        <Card
          title="Exemple de Titre"
          description="Ceci est une description pour illustrer comment utiliser Card dans App.js."
        />
      </BorderFrame>
      {children}{' '}
      {/* Pour du contenu supplémentaire spécifique à chaque page. */}
      <Footer />
    </div>
  )
}

export default Layout
