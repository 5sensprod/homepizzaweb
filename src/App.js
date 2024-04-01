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
        {' '}
        {/* Ajoutez le composant BorderFrame */}
        <Box title="PANINIS" subtitle="Fermier" price="8,50 €">
          <p>Crème fraîche, fromage poulet nature</p>
        </Box>
        <Box title="PANINIS" subtitle="Fermier" price="8,50 €">
          <p>Crème fraîche, fromage poulet nature</p>
        </Box>
        <Box title="PANINIS" subtitle="Fermier" price="8,50 €">
          <p>Crème fraîche, fromage poulet nature</p>
        </Box>
        <Box title="PANINIS" subtitle="Fermier" price="8,50 €">
          <p>Crème fraîche, fromage poulet nature</p>
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
