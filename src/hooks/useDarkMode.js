import { useEffect, useState } from 'react'

const STORAGE_KEY = 'digitaleggheads-theme'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return false

  const storedTheme = localStorage.getItem(STORAGE_KEY)
  if (storedTheme) return storedTheme === 'dark'

  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
    localStorage.setItem(STORAGE_KEY, isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  return {
    isDarkMode,
    toggleDarkMode,
  }
}

export default useDarkMode
