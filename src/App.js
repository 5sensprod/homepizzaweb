import React from 'react'
import { ThemeProvider, useTheme } from './contexts/ThemeContext'
import ThemedApp from './components/ui/ThemedApp'
import Card from './components/ui/Card'
import Box from './components/ui/Box'
import BorderFrame from './components/ui/BorderFrame'

function AppContainer() {
  const { theme } = useTheme()
  const containerClass = `centered-container ${theme}`

  return (
    <div className={containerClass}>
      <ThemedApp />
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
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  )
}

export default App
