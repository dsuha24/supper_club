import React from 'react'

export default function AuthLayout({ children }) {
  return (
    <div className="AuthLayout">
      <div className="AuthLayout__Box">
        <div className="AuthLayout__Box__inner">{children}</div>
      </div>
    </div>
  )
}
