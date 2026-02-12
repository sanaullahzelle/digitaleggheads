import React, { useRef, useState } from 'react'
import useEscapeKey from '../hooks/useEscapeKey'
import useOutsideClick from '../hooks/useOutsideClick'

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)

  useOutsideClick(wrapperRef, () => setIsOpen(false), isOpen)
  useEscapeKey(() => setIsOpen(false), isOpen)

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        type='button'
        className="micro-btn bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls='chat-options'
      >
        Chat Options
      </button>

      {isOpen && (
        <div id='chat-options' className="absolute z-10 mt-1" role='menu' aria-label='Chat quick options'>
          <div className="bg-white border rounded p-2 min-w-[170px] shadow-lg">
            <button type='button' role='menuitem' className="w-full text-left hover:bg-gray-200 py-2 px-4 rounded">Option 1</button>
            <button type='button' role='menuitem' className="w-full text-left hover:bg-gray-200 py-2 px-4 rounded">Option 2</button>
            <button type='button' role='menuitem' className="w-full text-left hover:bg-gray-200 py-2 px-4 rounded">Option 3</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chat
