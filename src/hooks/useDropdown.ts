import React from 'react'

const useDropdown = () => {
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const [dropdownIs, setDropdownIs] = React.useState(false)

  React.useEffect(() => {
    const dropdownHandler = (e: MouseEvent) => {
      if (dropdownIs && dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownIs(false)
        console.log('close')
      }

      document.addEventListener('mousedown', dropdownHandler)

      return () => {
        document.removeEventListener('mousedown', dropdownHandler)
      }
    }
  }, [dropdownIs])

  return {
    dropdownRef,
    dropdownIs,
    setDropdownIs
  }
}

export default useDropdown