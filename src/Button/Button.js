import React from 'react'
import PropTypes from 'prop-types'

/**
 * Button Component
 */
const Button = ({ onClick, disabled, children }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

Button.propTypes = {
  /** callback when button clicked */
  onClick: PropTypes.func,
  /** button disabled */
  disabled: PropTypes.bool,
  /** children nodes  */
  children: PropTypes.node
}

export default Button
