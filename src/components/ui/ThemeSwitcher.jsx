import React from 'react'
import { useTheme } from '../../contexts/ThemeContext'
import ToggleButton from './ToggleButton'
// import { ReactComponent as SunSvg } from '../../assets/sun.svg'
// import { ReactComponent as MoonSvg } from '../../assets/moon.svg'
import { ReactComponent as SunSvg } from '../../assets/icons/sun_smile_hand_drawed.svg'
import { ReactComponent as MoonSvg } from '../../assets/icons/moon_icon_hand_drawn-min.svg'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  const isDarkModeOn = theme === 'dark'

  return (
    <ToggleButton
      isOn={isDarkModeOn}
      onClick={toggleTheme}
      labels={{ on: 'Sombre', off: 'Clair' }}
      disableHover={true}
      disableTap={false}
      SunIcon={SunSvg}
      MoonIcon={MoonSvg}
    />
  )
}

export default ThemeSwitcher
