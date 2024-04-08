import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import { MenuDataProvider } from './contexts/MenuDataContext'
import Layout from './components/layout'
import { BrowserRouter as Router } from 'react-router-dom'
import { CartProvider } from './contexts/CartContext'
import { CompanyDataProvider } from './contexts/CompanyDataContext'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function App() {
  return (
    <ThemeProvider>
      <CompanyDataProvider>
        <MenuDataProvider>
          <CartProvider>
            <Router>
              <Layout />
            </Router>
          </CartProvider>
        </MenuDataProvider>
      </CompanyDataProvider>
    </ThemeProvider>
  )
}
export default App
