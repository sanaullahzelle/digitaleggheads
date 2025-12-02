import React from 'react'
// import Typed from 'react-typed';
// import Media from './Media';
import  {AiOutlineSearch} from 'react-icons/ai'
import Feedback from '../components/Feedback';
import Courses from '../components/Courses';


const Services = () => {
  return (
    <div className='relative'> 
    <div className="relative py-[9rem] text-center text-black ">
 <img src='https://www.onlineathens.com/gcdn/authoring/2019/08/20/NABH/ghows-GA-9078f07d-a4a0-22e7-e053-0100007f4105-880a2a27.jpeg?width=1320&height=944&fit=crop&format=pjpg&auto=webp' alt="Background Image" className="absolute top-0 left-0 w-full h-full object-cover opacity-70" />

 <div className="w-full lg:w-1/2 flex text-black flex-col md:flex relative z-10 ml-[30rem] ">
   <h1 className="text-xl md:text-7xl sm:text-3xl font-bold">Services We Offer</h1>
   <p className='mt-10 text-2xl'>From SEO to PPC, we offer comprehensive digital marketing services to fuel your growth.</p>
 </div>
</div>
 {/* Media */}
  <div className='max-w-7xl mx-auto '>
  <Courses />
  </div>
     


     
      
</div>
  )
}

export default Services
