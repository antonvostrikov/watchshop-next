import React from 'react'

const useDropdown = () => {
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const [dropdown, setDropdown] = React.useState(false)

  React.useEffect(() => {
    const dropdownHandler = (e: MouseEvent) => {
      if (dropdownRef && dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdown(false)
      }
    }

    document.addEventListener('mousedown', dropdownHandler)

    return () => {
      document.removeEventListener('mousedown', dropdownHandler)
    }  
  }, [])

  return {
    dropdownRef,
    dropdown,
    setDropdown
  }
}

export default useDropdown