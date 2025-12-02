import React from 'react'
import CTA from '../components/CTA'
import App from '../components/App'
import Chat from '../components/Chat'


const Contact = () => {

 
  return (
    <div>
       <div className='py-40 bg-white-500 shadow-sm shadow-md text-center text-black px-4'>
       <h1 className='text-5xl lg:text-5xl loading-snug font-bold mb-5'>Contact With Us</h1>
       <p className='text-2xl mb-10 hover:text-orange-500 cursor-pointer'>Contact</p>
       <CTA/>
       <App/>
       
       </div>
    
       <Chat/>
    </div>
  )
}

export default Contact
