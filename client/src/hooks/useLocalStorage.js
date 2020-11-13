import React from 'react'

const formatValue = (value, type) => {
  try {
    switch (type) {
      case 'string':
        return value ? String(value) : value
      case 'object':
        return value ? JSON.parse(value) : value
      case 'number':
        return value ? Number(value) : value
      case 'bool':
        return Boolean(value === 'true')
      default:
        return value
    }
  } catch (err) {
    return value
  }
}

export default function useLocalStorage(key, type = 'string') {
  const [value, setValue] = React.useState(
    formatValue(localStorage.getItem(key), type),
  )

  const storageRef = React.useRef()

  const clear = () => {
    window.localStorage.removeItem(key)
    setValue(null)
  }

  const setItem = (val) => {
    window.localStorage.setItem(key, JSON.stringify(val))
    setValue(val)
  }

  React.useEffect(() => {
    storageRef.current = () => {
      setValue(formatValue(localStorage.getItem(key), type))
    }

    window.addEventListener('storage', storageRef.current)

    return () => {
      window.removeEventListener('storage', storageRef.current)
    }
  }, [])

  return key
    ? {
        [key]: value,
        clear,
        setItem,
      }
    : {}
}
