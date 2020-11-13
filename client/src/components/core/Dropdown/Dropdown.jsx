import React from 'react'

export default function Dropdown({
  inputRef,
  label,
  helperText,
  data,
  ...props
}) {
  return (
    <>
      {label && (
        <div className="dropdown__label">
          <span>{label}</span>
        </div>
      )}
      <select ref={inputRef} className="dropdown" {...props}>
        {(data || []).map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {helperText && (
        <div className="dropdown__helper">
          <span>{helperText}</span>
        </div>
      )}
    </>
  )
}
