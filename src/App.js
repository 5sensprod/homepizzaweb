import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/layout'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  )
}
export default App
