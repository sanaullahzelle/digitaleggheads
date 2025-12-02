import React from 'react'

const Chat = () => {
  return (
    <div className="relative group">
    <button className="bg-blue-500 text-white py-2 px-4 rounded">
      Hover Me
    </button>
    <div className="hidden absolute z-10 mt-1 group-hover:block">
      {/* Dropdown content goes here */}
      <div className="bg-white border rounded p-2">
        <a href="#" className="block hover:bg-gray-200 py-2 px-4">Option 1</a>
        <a href="#" className="block hover:bg-gray-200 py-2 px-4">Option 2</a>
        <a href="#" className="block hover:bg-gray-200 py-2 px-4">Option 3</a>
      </div>
    </div>
  </div>
  )
}

export default Chat