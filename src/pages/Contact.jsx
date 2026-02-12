import React from 'react'
import Seo from '../components/Seo'
import CTA from '../components/CTA'
import App from '../components/App'
import Chat from '../components/Chat'

const Contact = () => {
  return (
    <>
      <Seo
        title="Digital Eggheads | Contact"
        description="Get in touch with Digital Eggheads to discuss your growth goals, campaigns, and partnership opportunities."
        url="https://digitaleggheads.com/contact"
      />
      <div>
        <div className='py-40 bg-white-500 shadow-sm shadow-md text-center text-black px-4'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl loading-snug font-bold mb-5'>Let’s Build Your Growth Plan</h1>
          <p className='text-xl sm:text-2xl mb-10 text-gray-600'>Start a conversation with our strategy team.</p>
          <CTA />
          <App />
        </div>

        <Chat />
      </div>
    </>
  )
}

export default Contact
