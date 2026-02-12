import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar'

jest.mock('./Modal', () => ({ isOpen, onClose }) =>
  isOpen ? <div data-testid='mock-modal'><button onClick={onClose}>Close modal</button></div> : null,
)

jest.mock('react-icons/fa6', () => ({
  FaBars: () => <span>bars</span>,
  FaXmark: () => <span>xmark</span>,
  FaSun: () => <span>sun</span>,
  FaMoon: () => <span>moon</span>,
}))

describe('Navbar', () => {
  it('toggles mobile menu with hamburger button', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )

    const menuButton = screen.getByRole('button', { name: /open menu/i })
    fireEvent.click(menuButton)
    expect(screen.getByRole('heading', { name: /menu/i })).toBeInTheDocument()

    const closeButton = screen.getByRole('button', { name: /close menu/i })
    fireEvent.click(closeButton)
    expect(screen.queryByRole('heading', { name: /menu/i })).not.toBeInTheDocument()
  })

  it('opens modal from CTA button', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    )

    const ctaButtons = screen.getAllByRole('button', { name: /open conversation modal/i })
    fireEvent.click(ctaButtons[0])
    expect(screen.getByTestId('mock-modal')).toBeInTheDocument()
  })
})
