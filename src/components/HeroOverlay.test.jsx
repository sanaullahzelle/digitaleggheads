import { render, screen } from '@testing-library/react'
import HeroOverlay from './HeroOverlay'

describe('HeroOverlay', () => {
  it('renders title and description content', () => {
    render(
      <HeroOverlay
        imageSrc='https://example.com/hero.jpg'
        title='Services We Offer'
        description='Integrated marketing for modern brands.'
      />,
    )

    expect(screen.getByRole('heading', { name: /services we offer/i })).toBeInTheDocument()
    expect(screen.getByText(/integrated marketing for modern brands/i)).toBeInTheDocument()
  })
})
