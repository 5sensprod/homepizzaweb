import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Layout from './components/layout'

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  )
}

export default App
