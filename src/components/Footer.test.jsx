import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders brand and key navigation headings', () => {
    render(<Footer />)

    expect(screen.getByText(/digital/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /work/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /connect/i })).toBeInTheDocument()
  })
})
