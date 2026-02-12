import { useEffect } from 'react'

const useEscapeKey = (onEscape, enabled = true) => {
  useEffect(() => {
    if (!enabled) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onEscape()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [enabled, onEscape])
}

export default useEscapeKey
