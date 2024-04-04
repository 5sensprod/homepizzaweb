import React from 'react'
import Logo from '../Logo'
import ThemeSwitcher from '../ui/ThemeSwitcher'
import InputSearch from '../ui/InputSearch'
import Navigation from '../Navigation'

const Header = () => (
  <header className="header">
    <Logo />
    <InputSearch placeholder="Chercher..." />
    <Navigation />
    <ThemeSwitcher />
  </header>
)

export default Header
