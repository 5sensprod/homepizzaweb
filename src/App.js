import { ThemeProvider } from './contexts/ThemeContext'
import ThemedApp from './components/ui/ThemedApp'
import Card from './components/ui/Card'

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
      <Card
        title="Exemple de Titre"
        description="Ceci est une description pour illustrer comment utiliser Card dans App.js."
      />
    </ThemeProvider>
  )
}

export default App
