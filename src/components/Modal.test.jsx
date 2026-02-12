import { render, screen, fireEvent } from '@testing-library/react'
import Modal from './Modal'

describe('Modal form behavior', () => {
  it('adds a message when send is clicked', () => {
    render(<Modal isOpen onClose={() => {}} />)

    const input = screen.getByLabelText(/write a chat message/i)
    fireEvent.change(input, { target: { name: 'message', value: 'Hello team' } })
    fireEvent.click(screen.getByRole('button', { name: /send message/i }))

    expect(screen.getByText('Hello team')).toBeInTheDocument()
  })

  it('sends message on Enter key', () => {
    render(<Modal isOpen onClose={() => {}} />)

    const input = screen.getByLabelText(/write a chat message/i)
    fireEvent.change(input, { target: { name: 'message', value: 'Keyboard send' } })
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

    expect(screen.getByText('Keyboard send')).toBeInTheDocument()
  })
})
