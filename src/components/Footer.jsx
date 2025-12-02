import React from 'react'
// import { logo } from '../assets'
import {BiSolidMessageDetail} from 'react-icons/bi'
import {BsFacebook, BsInstagram, BsLinkedin} from 'react-icons/bs'
import { AiFillCodepenCircle, AiFillTwitterCircle } from 'react-icons/ai'



const Footer = () => {
  return (
    <div className='bg-gray-200'>
    <div className='w-full bg-white-500 py-24 px-24  max-w-7xl mx-auto  '>
   <div className='md:max-w-[1480px] m-auto grid  md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0'>
            
   <div className=''>
   <h1 className='text-4xl font-bold text-black'>Digital <br />Eggheads</h1>
     

   </div>

   <div>
       <h3 className='text-3xl font-bold text-black'>About</h3>
       <ul className='py-6 text-[#6D737A]'>
           <li className='py-2'>Our Story</li>
           <li className='py-2'>Culture & Team</li>

       </ul>
   </div>

   <div>
       <h3 className='text-3xl font-bold text-black'>Work</h3>
       <ul className='py-6 text-[#6D737A]'>
           <li className='py-2'>Case Studies</li>
           <li className='py-2'>Clients</li>
       </ul>
   </div>
   <div>
       <h3 className='text-3xl font-bold text-black'>Project</h3>
       <ul className='py-6 text-[#6D737A]'>
           <li className='py-2'>Digital Ninja Training</li>
           <li className='py-2'>Mainstream Pakistan</li>
       </ul>
   </div>
   <div>
       <h3 className='text-3xl font-bold text-black'>Connect</h3>
       <ul className='py-6 text-[#6D737A]'>
           <li className='py-2'>Get in Touch</li>
           <li className='py-2'>Work With Us</li>
       </ul>
   </div>
</div>
<img className='mt-10' src="logo1.svg" alt="logo1" />
<div className='items-center justify-center gap-3 mt-10 text-4xl  fas fa-star flex cursor-pointer'>
<BiSolidMessageDetail className='text-5xl mt-2 rounded rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[30px]'/>
<BsLinkedin className='rounded rounded-tl-[18px] rounded-tr-[18px] rounded-bl-[18px] rounded-br-[18px]'/>
<BsFacebook/>
<BsInstagram className='rounded rounded-tl-[18px] rounded-tr-[18px] rounded-bl-[18px] rounded-br-[18px]'/>
<AiFillCodepenCircle/>
<AiFillTwitterCircle/>

</div>
<p className='justify-center text-center sm:text-left mt-8 items-center md:ml-[22rem] mt-8 text-gray-600'>© Digital Eggheads. All rights reserved. - Privacy Policy</p>
</div>
</div>
  )
}

export default Footer
