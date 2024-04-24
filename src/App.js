import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { MenuDataProvider } from './contexts/MenuDataContext'
import { CartProvider } from './contexts/CartContext'
import { CompanyDataProvider } from './contexts/CompanyDataContext'
import HomeLayout from './components/layout/HomeLayout'
import MenuLayout from './components/layout/MenuLayout'
import HomePage from './components/pages/HomePage'
import MenuPage from './components/pages/MenuPage'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function App() {
  return (
    <ThemeProvider>
      <CompanyDataProvider>
        <MenuDataProvider>
          <CartProvider>
            <Router>
              <Routes>
                <Route
                  path="/"
                  element={
                    <HomeLayout>
                      <HomePage />
                    </HomeLayout>
                  }
                />
                <Route
                  path="/menu/:menuType"
                  element={
                    <MenuLayout>
                      <MenuPage />
                    </MenuLayout>
                  }
                />
              </Routes>
            </Router>
          </CartProvider>
        </MenuDataProvider>
      </CompanyDataProvider>
    </ThemeProvider>
  )
}

export default App
