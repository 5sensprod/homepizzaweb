import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemedApp from './components/ui/ThemedApp'
import Card from './components/ui/Card'
import Box from './components/ui/Box'
import BorderFrame from './components/ui/BorderFrame' // Importez BorderFrame

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
      <BorderFrame bottom left>
        <Box subtitle="Fermier" isVisible={true} isLineVisible={false}>
          <p>Crème fraîche, fromage et poulet nature</p>
        </Box>
      </BorderFrame>
      <Card
        title="Exemple de Titre"
        description="Ceci est une description pour illustrer comment utiliser Card dans App.js."
      />
    </ThemeProvider>
  )
}

export default App
