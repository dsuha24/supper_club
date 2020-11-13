import React from 'react'

export default function FormItem({ hasError, ...props }) {
  const { children } = props
  return (
    <div className={`form-item ${hasError ? 'form-error' : ''}`}>
      {children}
    </div>
  )
}
