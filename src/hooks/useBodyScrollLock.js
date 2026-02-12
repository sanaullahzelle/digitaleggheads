import { useEffect } from 'react'

const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    document.body.style.overflow = isLocked ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isLocked])
}

export default useBodyScrollLock
