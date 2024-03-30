import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import ThemedApp from './components/ui/ThemedApp'

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  )
}

export default App
