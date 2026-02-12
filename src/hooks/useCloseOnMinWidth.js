import { useEffect } from 'react'

const useCloseOnMinWidth = (minWidth, onReachMinWidth) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= minWidth) {
        onReachMinWidth()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [minWidth, onReachMinWidth])
}

export default useCloseOnMinWidth
