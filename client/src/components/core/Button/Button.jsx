/* eslint-disable react/button-has-type */
import React from 'react'

function Button(props) {
  const { className, children, type } = props
  return (
    <button
      {...props}
      type={type || 'button'}
      className={`button ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
