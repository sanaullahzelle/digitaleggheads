import React, { useCallback, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaBars, FaMoon, FaSun, FaXmark } from 'react-icons/fa6'
import Modal from './Modal'
import useBodyScrollLock from '../hooks/useBodyScrollLock'
import useCloseOnMinWidth from '../hooks/useCloseOnMinWidth'
import useEscapeKey from '../hooks/useEscapeKey'
import useDarkMode from '../hooks/useDarkMode'

const navItems = [
  { path: '/', link: 'Home' },
  { path: '/services', link: 'Services' },
  { path: '/about', link: 'About' },
  { path: '/blogs', link: 'Blogs' },
  { path: '/contact', link: 'Contact' },
]

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  const closeMenu = useCallback(() => {
    setShowMenu(false)
  }, [])

  const closeAllOverlays = useCallback(() => {
    closeMenu()
    setIsModalOpen(false)
  }, [closeMenu])

  useBodyScrollLock(showMenu)
  useCloseOnMinWidth(768, closeMenu)
  useEscapeKey(closeAllOverlays)

  return (
    <header className='sticky top-0 left-0 right-0 z-50 text-white bg-gradient-to-r from-[#00003f] via-orange-900 to-[#00003f]'>
      <nav
        className='max-w-7xl mx-auto flex justify-between items-center h-20 sm:h-24 px-4 sm:px-6 lg:px-8'
        aria-label='Primary'
      >
        <img className='h-10 sm:h-12 w-auto' src='logo2.png' alt='Digital Eggheads logo' />

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 text-base lg:text-lg'>
          {navItems.map(({ path, link }) => (
            <li className='text-white hover:text-orange-500 transition-colors' key={path}>
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>

        <div className='hidden lg:flex text-white gap-4 items-center'>
          <a href='/' className='hover:text-orange-500 transition-colors'>🔥Apply - Hiring-Now</a>
          <button
            type='button'
            onClick={toggleDarkMode}
            className='micro-btn h-11 w-11 rounded-lg border border-white/40 flex items-center justify-center'
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <FaSun aria-hidden='true' /> : <FaMoon aria-hidden='true' />}
          </button>
          <button
            type='button'
            onClick={() => setIsModalOpen(true)}
            className='micro-btn px-6 py-2 font-medium rounded-lg bg-orange-600 h-14 hover:bg-orange-700 duration-300 flex'
            aria-haspopup='dialog'
            aria-label="Open conversation modal"
          >
            <span className='mt-2'>Let's start the conversition</span>
          </button>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        <button
          type='button'
          onClick={toggleDarkMode}
          className='micro-btn lg:hidden h-12 w-12 bg-white rounded-lg flex items-center justify-center text-black'
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {isDarkMode ? <FaSun aria-hidden='true' /> : <FaMoon aria-hidden='true' />}
        </button>

        <button
          type='button'
          onClick={() => setShowMenu((prev) => !prev)}
          className='md:hidden h-12 w-12 bg-white rounded-lg flex items-center justify-center'
          aria-label={showMenu ? 'Close menu' : 'Open menu'}
          aria-expanded={showMenu}
          aria-controls='mobile-menu'
        >
          {showMenu ? (
            <FaXmark className='w-7 h-7 text-black' aria-hidden='true' />
          ) : (
            <FaBars className='w-7 h-7 text-black' aria-hidden='true' />
          )}
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          showMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          type='button'
          className='absolute inset-0 bg-black/50'
          aria-label='Close menu backdrop'
          onClick={closeMenu}
        />

        <aside
          id='mobile-menu'
          role='dialog'
          aria-modal='true'
          aria-labelledby='mobile-menu-title'
          className={`absolute top-0 right-0 h-full w-[82%] max-w-sm bg-gradient-to-b from-[#00003f] via-orange-900 to-[#00003f] px-8 py-24 shadow-2xl transition-transform duration-300 ease-out ${
            showMenu ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <h2 id='mobile-menu-title' className='text-2xl font-semibold mb-8'>Menu</h2>
          <ul className='space-y-6 text-lg'>
            {navItems.map(({ path, link }) => (
              <li className='text-white' key={path}>
                <NavLink
                  className='hover:text-orange-300 transition-colors'
                  onClick={closeMenu}
                  to={path}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            type='button'
            onClick={toggleDarkMode}
            className='micro-btn mt-10 w-full px-5 py-3 rounded-lg border border-white/40 hover:bg-white/10 transition-colors font-semibold flex items-center justify-center gap-2'
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDarkMode ? <FaSun aria-hidden='true' /> : <FaMoon aria-hidden='true' />}
            {isDarkMode ? 'Light mode' : 'Dark mode'}
          </button>

          <button
            type='button'
            onClick={() => {
              closeMenu()
              setIsModalOpen(true)
            }}
            className='micro-btn mt-10 w-full px-5 py-3 rounded-lg bg-orange-600 hover:bg-orange-700 transition-colors font-semibold'
            aria-haspopup='dialog'
          >
            Let's start the conversition
          </button>
        </aside>
      </div>
    </header>
  )
}

export default Navbar
