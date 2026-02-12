import React, { useCallback, useState } from 'react'
import { BsSend } from 'react-icons/bs'
import useEscapeKey from '../hooks/useEscapeKey'
import useFormHandler from '../hooks/useFormHandler'

const Modal = ({isOpen, onClose}) => {
  const [messages, setMessages] = useState([])
  const { values, handleChange, resetField } = useFormHandler({ message: '' })

  const handleSendMessage = useCallback(() => {
    const trimmedMessage = values.message.trim()
    if (trimmedMessage !== '') {
      setMessages((prev) => ([
        ...prev,
        {
          text: trimmedMessage,
          isMe: true,
          userName: 'You',
          userIcon: <img src='user.jpg' alt='You avatar' className='h-[3rem] rounded rounded-t-[25px] rounded-b-[25px]' />,
        },
      ]))
      resetField('message')
    }
  }, [resetField, values.message])

  const handleInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage()
    }
  }

  useEscapeKey(onClose, isOpen)

  return (
    <div className={`fixed top-[10rem] left-0 w-full flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className='modal-container'>
        <div
          className='bg-orange-200 text-center p-5 h-[35rem] lg:w-[25rem] rounded shadow-md'
          role='dialog'
          aria-modal='true'
          aria-labelledby='chat-modal-title'
        >
          <h2 id='chat-modal-title' className='sr-only'>Conversation modal</h2>

          <div className="container mx-auto">
            <div className="bg-orange-500 text-white p-4 text-center">
              <div className="flex items-center justify-center ">
                <img src="logo.png" alt="Chat app logo" className="w-8 h-8 mr-2 rounded rounded-t-[15px] rounded-b-[15px]" />
                <span>Your Chat App</span>
              </div>
            </div>
            <div className="border border-gray-300 rounded-lg p-4 h-80 overflow-y-auto" aria-live='polite'>
              {messages.map((message, index) => (
                <div key={index} className="mb-2">
                  <div className="flex">
                    <div className="mr-2">{message.userIcon}</div>
                    <div className="flex flex-col">
                      <span className="font-bold text-black">{message.userName}</span>
                      <div
                        className={`rounded-lg p-2 ${
                          message.isMe ? 'bg-blue-500 text-white' : 'bg-gray-200'
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 flex">
              <input
                type="text"
                name='message'
                placeholder='Write a message'
                value={values.message}
                onChange={handleChange}
                onKeyDown={handleInputKeyDown}
                className="w-full border border-gray-300 rounded p-2 focus:outline-none text-black bg-gray-200"
                aria-label='Write a chat message'
              />
              <button
                type='button'
                onClick={handleSendMessage}
                className="micro-btn bg-gray-200 text-gray-600 hover:text-orange-500 rounded px-4 ml-2"
                aria-label='Send message'
              >
                <BsSend aria-hidden='true' />
              </button>
            </div>
          </div>

          <button
            type='button'
            onClick={onClose}
            className='micro-btn hover:bg-orange-500 hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-gray-700 py-3 px-8 text-base font-semibold text-white outline-none mb-4 mt-7'
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
