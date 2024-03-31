import { ThemeProvider } from './contexts/ThemeContext'
import ThemedApp from './components/ui/ThemedApp'
import Card from './components/ui/Card'
import Box from './components/ui/Box'

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
      <Box title="PANINIS" subtitle="Fermier" price="8,50 €">
        <p>Crème fraîche, fromage poulet nature</p>{' '}
        {/* Remplacez ceci par le contenu réel de votre Box */}
      </Box>
      <Card
        title="Exemple de Titre"
        description="Ceci est une description pour illustrer comment utiliser Card dans App.js."
      />
    </ThemeProvider>
  )
}

export default App
