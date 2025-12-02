import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {FaBars, FaDribbble, FaFacebook, FaTwitter, FaXmark} from 'react-icons/fa6'
import Modal from './Modal'



const Navbar = () => {
  
   const [isModalOpen, setIsModalOpen] = useState(false)
   const [showMenu, setShowMenu]=useState(false)

   const toggleMenu = () =>{
    setShowMenu(!showMenu);
   }

   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

    // nav items 
    const navItems = [
        {path:'/', link: 'Home'},
        {path:'/services', link: 'Services'},
        {path:'/about', link: 'About'},
        {path:'/blogs', link: 'Blogs'},
        {path:'/contact', link: 'Contact'},
    ]

    {/* MOdal details  */} 
    const openModal = () => {
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)   
    }
 
  return (
    <header className='bg-gradient-to-r from-[#00003f] absolute via-orange-900 to-dark-blue-500 via-to-b from-[#00003f] via-orange-900 to-[#00003f] z-50 text-white sticky top-0 left-0 right-0 '>
        <nav className=' max-w-9xl mx-auto flex justify-between items-center h-32 '>
            {/* <a href='/' className='text-xl font-bold text-white'>WK<span className='text-orange-600'>Marketing</span></a> */}
            <img className='md:ml-[14rem] ' src='logo2.png' />


            {/* nav for large device  */}
            <ul className='md:flex gap-12 text-lg hidden md:hidden '>
                {
                    navItems.map(({path, link}) => <li className='text-white hover:text-orange-500 ' key={path}>
                        <NavLink to={path}>{link}</NavLink>
                    </li>)
                }
            </ul>

            {/* menu icons  */}
            <div className='text-white lg:flex ml-[10rem] gap-4 items-center sm:hidden hidden md:hidden grow ml-80'>
                <a href='/' className='hover:text-orange-500 ml-80'>🔥Apply - Hiring-Now</a>
                
                <button  onClick={openModal} className='px-6 py-2 font-medium rounded bg-orange-600 h-14 rounded-lg hover:bg-orange-700 hover:text-white-600 duration-500 flex '><span className='mt-2'>Let's start the conversition</span></button>
            </div>

            {/* our modal component is here  */} 
            <Modal isOpen={isModalOpen} onClose={closeModal} />


            {/* mobile menu btn , display mobile screen  */}
            <div className='h-14 w-14 bg-white  md:mr-[24rem]  rounded-lg flex-none'> 
            <button onClick={toggleMenu} className='cursor-pointer '>
                {
                    showMenu ? <FaXmark  className='w-7 h-7 mt-3.5 ml-3.5 text-black '/> : <FaBars   className='w-7 h-7 mt-3.5 ml-3.5 text-black '/>
                }
             </button>
            </div>
        </nav>

           {/* menu items only for mobile  */}
              <ul className={`relative gap-12 text-lg z-50 block space-y-4 sm:bg-red-400 px-60 py-60 w-full h-[90vh] fixed mt-30 bg-gradient-to-r from-[#00003f]  via-orange-900 to-dark-blue-500 via-to-b from-[#00003f] via-orange-900 to-[#00003f]  ${showMenu ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                {
                    navItems.map(({path, link}) => <li className='text-white  ' key={path}>
                        <NavLink className={`nav`} onClick={() => setShowMenu(false)} to={path}>{link}</NavLink>
                 <li className='hidden'>
                  <a href="/custom-link">Custom Link</a>
                    </li>
                    </li>)
                    
                } 
                 
               
             </ul>
             
    </header>
  )
}

export default Navbar
