import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { buttonVariants } from '../animations/buttonAnimations'
import '../../styles/components/button.scss'

const ToggleButton = ({ isOn, onClick, labels, disableHover, disableTap }) => {
  const appliedVariants = {
    ...(disableHover ? {} : { whileHover: 'hover' }),
    ...(disableTap ? {} : { whileTap: 'tap' }),
  }

  return (
    <motion.button
      className={`toggle-button ${isOn ? 'on' : 'off'}`}
      onClick={onClick}
      variants={buttonVariants}
      {...appliedVariants}
    >
      {isOn ? labels.on : labels.off}
    </motion.button>
  )
}

ToggleButton.propTypes = {
  isOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  labels: PropTypes.shape({
    on: PropTypes.string.isRequired,
    off: PropTypes.string.isRequired,
  }).isRequired,
  disableHover: PropTypes.bool,
  disableTap: PropTypes.bool,
}

// Valeurs par défaut pour les nouvelles props
ToggleButton.defaultProps = {
  disableHover: false,
  disableTap: false,
}

export default ToggleButton
