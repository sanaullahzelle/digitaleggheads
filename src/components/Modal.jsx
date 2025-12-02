import React, { useState } from 'react'
import { BiSend } from 'react-icons/bi';
import { BsSend } from 'react-icons/bs';

const Modal = ({isOpen, onClose}) => {

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([
        ...messages,
        { text: newMessage, isMe: true, userName: 'You', userIcon: <img src='user.jpg'className='h-[3rem] rounded rounded-t-[25px] rounded-b-[25px]' /> },
      ]);
      setNewMessage('');
    }
  };

  
  return (
    <div className={`fixed top-[10rem] left-0 w-full flex  items-center justify-center ${isOpen ? '' : "hidden"}`}>
      <div className='modal-container'>
       <div className='bg-orange-200 text-center p-5 h-[35rem] lg:w-[25rem] rounded  shadow-md'>
         
       {/* modal content  */} 
       {/* <h2 className='text-xl font-semibold mb-4 mt-6 mb-6 uppercase'>Please Login Here</h2> */}

       {/* text box  */}
       <div className="container mx-auto">
       <div className="bg-orange-500 text-white p-4 text-center">
        <div className="flex items-center justify-center ">
          <img src="logo.png" alt="Logo" className="w-8 h-8 mr-2 rounded rounded-t-[15px] rounded-b-[15px]" />
          <span>Your Chat App</span>
        </div>
      </div>
      <div className="border border-gray-300 rounded-lg p-4 h-80">
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
          placeholder='Write a message'
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full border border-gray-300 rounded p-2 focus:outline-none text-black bg-gray-200"
        />
        <button
          onClick={handleSendMessage}
          className="bg-gray-200 text-gray-600 hover:text-orange-500 rounded px-4 ml-2"
        >
         <BsSend/>
        </button>
      </div>
    </div>
       
        <button onClick={onClose} className='hover:bg-orange-500 hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-gray-700 py-3 px-8 text-base font-semibold text-white outline-none mb-4 mt-7' >Close</button>
       </div>
      </div>
    </div>
  )
}

export default Modal
