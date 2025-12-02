import React from 'react'
import Scard from '../components/Scard'


const Blogs = () => {
  return (
    <div>
       <div className="relative py-[7rem] text-center bg-gradient-to-r from-[#00003f] absolute via-orange-900 to-dark-blue-500 via-to-b from-[#00003f] via-orange-900 to-[#00003f]">
       <div className="w-full lg:w-1/2 flex text-black flex-col md:flex relative z-10 ml-[27rem] text-white ">
      <h1 className="text-xl md:text-7xl sm:text-3xl font-bold">Blogs</h1>
     <p className='mt-10 text-2xl'>From SEO to PPC, we offer comprehensive digital marketing services to fuel your growth.</p>
   </div>
  </div>


      {/* all blogs container   */}
      <div className='max-w-7xl mx-auto'>
        {/* <BlogPage/> */}
        {/* <Courses/> */}

      </div>
      <Scard/>
    </div>
  )
}

export default Blogs
