import React from 'react'
// import Cards from '../components/Cards'
import {SlGraduation} from 'react-icons/sl'
import {FiVideo} from 'react-icons/fi'
import {SlPeople} from 'react-icons/sl'
import {BsVectorPen} from 'react-icons/bs'
import {TiHtml5} from 'react-icons/ti'
import {TbMicrophone2,TbMusic} from 'react-icons/tb'
import {HiOutlineBriefcase} from 'react-icons/hi'
import {WiSunrise} from 'react-icons/wi'
import {AiOutlineCamera} from 'react-icons/ai'
import {BiData} from 'react-icons/bi'
import {MdAttachMoney} from 'react-icons/md'
import {FaCalendar, FaUniversity} from 'react-icons/fa'
import CategoryCard from '../components/CategoryCard'
import Typed from 'react-typed';
import Courses from '../components/Courses'
import Services from './Services'
import { blogImg1 } from '../assets'




const About = () => {
  return (
   <div className='relative'> 
     <div className="relative py-[15rem] text-center text-black ">
  <img src='https://thumbs.dreamstime.com/z/four-happy-friends-laughing-sitting-couch-living-room-four-happy-friends-laughing-sitting-couch-112145130.jpg' alt="Background Image" className="absolute top-0 left-0 w-full h-full object-cover opacity-70" />

  <div className="w-full lg:w-1/2 flex text-black flex-col md:flex relative z-10 ml-[30rem] ">
    <h1 className="text-xl md:text-7xl sm:text-3xl font-bold">About Us</h1>
    <p className='mt-10 text-2xl'>We’re Eggheads. A bunch of creative wizards, & growth enthusiasts out on a mission to push brands forward with passion & purpose.</p>
  </div>
</div>
  {/* Media */}
   {/* <Courses/> */}
      <div className='max-w-7xl mx-auto'>
      {/* <Cards/> */}
      <div className='w-full bg-white mt-20'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]   md:px-0'>
            
            <div className='flex flex-col justify-center '>
            <h1 className='text-5xl lg:text-5xl loading-snug  text-orange-400 font-serif'>We're brains full of ideas<br /> <span class='inline-block custom-margin'>oozing out ingenuity & dazzle</span></h1>
           
           </div>
            <p className='ml-10'>From a two-person start-up to an ROI-based digital agency working for a diverse clientele worldwide, our growth solutions have helped to establish a digital presence and achieve actionable growth for enterprises of various scales. Wondering what keeps us driven & inspired? It’s a balanced mix of curiosity, creativity & our team of talented individuals, full of personality, zest & unique preferences. Sounds like a win-win deal? It sure is.</p>
        </div>
        <div className="flex  space-x-8 p-3 mt-20">
      {/* Left Card */}
      <div className="p-4 rounded-lg shadow-md flex-1 bg-orange-500 mb-20">
        <div className="py-10">
          <i className="text-4xl text-white fas fa-star"><FaCalendar/></i>
          <h3 className="text-lg font-semibold mt-4 text-white md:text-3xl">Vision</h3>
          <p className="text-white mt-2">To serve as a committed and credible leadership partner for our clients to unlock their growth potential by directly impacting the bottom line with our results-oriented approach that generates an accelerated impact. And at the same time, to create a growth culture that fosters learning, focuses on upskilling, encourages ideation, and sparks initiatives to nurture curiosity, ignite enthusiasm, and fuel creativity among our team members.</p>
        </div>
      </div>

      {/* Right Card */}
      <div className="p-4 rounded-lg shadow-md flex-1 bg-blue-900 mb-20">
        <div className="py-10">
          <i className="text-4xl text-white fas fa-star"><FaCalendar/></i>
          <h3 className="text-lg font-semibold mt-4 text-white md:text-3xl">Vision</h3>
          <p className="text-white mt-2">To serve as a committed and credible leadership partner for our clients to unlock their growth potential by directly impacting the bottom line with our results-oriented approach that generates an accelerated impact. And at the same time, to create a growth culture that fosters learning, focuses on upskilling, encourages ideation, and sparks initiatives to nurture curiosity, ignite enthusiasm, and fuel creativity among our team members.</p>
        </div>
      </div>
    </div>
    <div className="mt-16 text-center mx-auto rounded-md bg-[#FEBA4F] p-4 shadow-lg rounded rounded-tl-[23px] rounded-br-[23px]  rounded-tr-[23px] rounded-bl-[23px] h-[19rem]">
  <h2 className="text-5xl font-medium mt-8 sm:text-1xl md:text-3xl lg:text-3xl xl:text-5xl">Want to go Mainstream with us?</h2>
  <p className="text-gray-700 md:mt-10 sm:mt-2 ">Discover the latest trends, insights, and best practices in marketing and entrepreneurship. Or partner <br /> with us and become a part of our conversations.</p>
  <div className="md:mt-10 sm:mt-2">
    <button className="bg-orange-600 h-[50px] font-custom text-white hover:bg-orange-500 scale-105 hover:scale-110 duration-200 py-2 px-4 mr-4 rounded-lg">Contact us for PR →</button>
    <button className="bg-orange-600 h-[50px] font-custom hover:bg-orange-500 scale-105 hover:scale-110 duration-200  text-white py-2 px-4 rounded-lg">Visit the website here →</button>
  </div>

</div>
    </div>
   
      </div>


      
       
 </div>
  )
}

export default About
