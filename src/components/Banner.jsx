import React from 'react'
// import { FaArrowRight } from 'react-icons/fa6'
// import { Link } from 'react-router-dom'
import Typed from 'react-typed';
import App from '../components/App'

const Banner = () => {
  return (
    <div className='px-4 py-32 bg-white-500 shadow-sm relative shadow-md bg-gradient-to-r from-[#00003f]  via-orange-900 to-dark-blue-500 via-to-b from-[#00003f] via-orange-900 to-[#00003f] mx-auto'>
        <div className='text-black text-center '>
        <div className="">
      <div className='flex justify-center items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
        <p className=' font-bold py-4 text-black'>
          Drive 
        </p>
        <Typed
              className=' font-bold pl-2 md:pl-4 text-orange-600'
              strings={['Impact', 'Change', 'Innovation']}
              typeSpeed={20}
              backSpeed={25}
             loop
       />

      </div>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-xl mt-10 text-white">
          We’re a digital marketing agency that helps you unlock your growth potential with holistic solutions, serving your <br/> unique business needs, by channeling disruptive ideas into actionable success strategies.</p>
      {/* <button className='border hover:bg-orange-500 hover:text-white w-[200px] transition-all duration-200 ease-in rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button> */}
      
    <div className='flex justify-center items-center gap-10 mt-10'>
    <span className='text-white'>200+<span className='ml-10 text-gray-400'>|</span></span>
      <span className='text-white '>💌Review<span className='ml-10 text-gray-400'>|</span></span>
      <span className='text-white '>💥Rating</span>
    </div>
    <div className='justify-center items-center gap-20 flex '>
    <span className='text-white text-gray-400 text-xs '>Globle Clients</span>
      <span className='text-white text-xs '>★★★★☆<span className='text-gray-400'>4.8/5</span></span>
      <span className='text-white text-xs '>★★★★☆<span className='text-gray-400'>4.9/5</span></span>
    </div>
    <p className='mt-20 text-white'>We’ve worked with some of the biggest brands</p>

      

    <div className='max-w-5xl mx-auto'>
      <App/>
    </div>
    </div>
        </div>
    </div>
  )
}

export default Banner
