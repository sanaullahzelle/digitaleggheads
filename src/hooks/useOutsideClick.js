import { useEffect } from 'react'

const useOutsideClick = (ref, onOutsideClick, enabled = true) => {
  useEffect(() => {
    if (!enabled) return

    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick()
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [enabled, onOutsideClick, ref])
}

export default useOutsideClick
