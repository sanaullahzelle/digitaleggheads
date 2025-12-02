import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import CardOne from '../data/CardOne'

const cardList = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/6610/6610971.png",
    title: "Marketing",
    description:
      "Get noticed by your audience across all digital paltforms.",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0071/6203/6269/files/Artboard_1_300x300.png?v=1614302541",
    title: "Creactive",
    description:
      "Make an impact with creative design & stirring campaigns.",
  },
  {
    img: "https://www.gigamon.com/content/dam/website-assets/icons/home-threats.png.imgo.png",
    title: "Search",
    description:
      "Cut through the clutter with professional SEO,SEM, and, PPC.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/8956/8956669.png",
    title: "Development",
    description:
      "Build your online presence with user-centric web development.",
  },
];


// below card 
const belowcard = [
  {
    img: "food1.jpg",
    description:
      "Food",
  },
  {
    img: "education.png",
    description:
      "Education",
  },
  {
    img: "nonprofit.jpg",
    description:
      "Non-Profit",
  },
  {
    img: "lifestyle.jfif",
    description:
      "Lifestyle",
  },
  {
    img: "traval.jpg",
    description:
      "Traval",
  },
  {
    img: "technology1.jpg",
    description:
      "Technology",
  },
  {
    img: "finance.jfif",
    description:
      "Finance",
  },
  {
    img: "health.jfif",
    description:
      "Healthcare",
  },
  {
    img: "auto.png",
    description:
      "Automobile",
  },
];


// cards 
function Card3({
  heading,
  thumbnailSrc,
  thumbnailAlt = "Thumbnail",
  className,
}) {
  return (
    <div className={`rounded-lg  shadow-sm ${className}`}>
      <div className="overflow-hidden rounded-lg flex flex-wrap">
        <img
          className="w-full cursor-pointer transition duration-300 ease-in-out transform hover:scale-110 rounded-lg h-[20rem] duration-300 bg-black opacity-100 hover:opacity-80 transition-opacity"
          src={thumbnailSrc}
          alt={thumbnailAlt}
        />
        <h3 className="text-[2rem] font-bold text-white block absolute mt-[240px] cover px-10 ">
        {heading}
      </h3>
      </div>
    </div>
  );
}




const Cards = () => {

  return (
    <>
     <div className='bg-white-500 shadow-sm shadow-md text-center text-black  '>
         <h1 className='text-5xl lg:text-5xl loading-snug  px-10 mt-24 text-orange-400 font-serif'>A Fuse of Creativity, Imagination & <br /> <span class='inline-block custom-margin'>Technical Expertise</span></h1>
         <div className='text-center text-black '>
        <h3 className='mt-8 text-2xl  lg:text-3xl text-gray-400 font-base'>We Deliver Excellence at Everything we do!</h3>
        <p className='text-1xl mt-10 text-gray-500'>As a futuristic digital marketing agency, we help you take your business to new heights of success with <br /> multi-channel services that add brilliance to your digital presence.</p>
       </div>
       <section className=" container mx-auto flex flex-col justify-between gap-2 pb-[6rem]">
      <div className="w-full  ">
        {/* about cards */}
        <div className="about-cards flex gap-10 flex-col md:flex-row">
        {cardList.map((card, id) => (
        <div
          key={id}
          className="flex flex-col cursor-pointer bg-white justify-center py-6 px-10  mt-24 rounded-tl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-bl-[35px] shadow-2xl md:min-h-[300px] w-full card-item-div max-w-screen-md min-h-[260px]"
        >
          <img src={card.img} alt="box_img" className="w-[75px] mb-4 text-orange-500" />
          <p className="text-[24px] font-bold uppercase mb-4 ">{card.title}</p>
          <p className="text-[15px] font-medium leading-2 w-full ">
            {card.description}
          </p>
        </div>
      ))}
        </div>
      </div>
    </section>
    <div className='bg-white-500 shadow-sm shadow-md text-center text-black  '>
         <h1 className='text-5xl lg:text-5xl loading-snug  px-10 mt-24 text-orange-400 font-serif'>From Idea to Action, we've Driven <br /> <span class='inline-block custom-margin'>Immense Growth for our Clients</span></h1>
         <div className='text-center text-black '>
        <h3 className='mt-8 text-2xl  lg:text-3xl text-gray-400 font-base'>Not Convinced? See for Yourself</h3>
        <p className='text-1xl mt-10 text-gray-500'>We view our clients as partners on their growth journey & empower them to attain their goals..</p>
       </div>
       </div>

       <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 mt-10 md:grid-cols-2 p-3 sm:p-8 ">
       <Card3
         className="bg-[#f3faff]"
         heading="Furnishing a Decorative Presence"
         thumbnailSrc="room.jpg"
       />
       <Card3
         className="bg-[#f3faff]"
         heading="Building Presence in a Specialized"
         thumbnailSrc="doctor.jpg"
       />
       <Card3
         className="bg-[#f3faff]"
         heading="Speeding to the Top of SERPs"
         thumbnailSrc="car.jpg"
       />
       <Card3
         className="bg-[#f3faff]"
         heading="Speeding to the Top of SERPs"
         thumbnailSrc="light.jpg"
       />
     </div>
     <button className='border h-[53px] border-black w-[14.5rem] mt-8 rounded-tl-[15px] transform scale-100 hover:scale-110 duration-200 rounded-br-[10px] rounded-tr-[15px] rounded-bl-[15px] hover:shadow-2xl'>view all case studies →</button>

     <div className='container flex bg-gray-100  gap-10 border mt-[200px] duration-200 rounded-tl-[15px] rounded-br-[10px]  rounded-tr-[15px] rounded-bl-[15px] shadow-2xl'>
      <div className='right'>
      <h1 className='text-5xl lg:text-5xl loading-snug  mt-60 text-orange-400 font-serif'>Industries we've Worked for</h1>
      <p className='text-1xl mt-8 text-gray-500 ml-[100px]'>Our decade of experience across multiple industries has helped our clients stay ahead of the curve!</p>
      </div>
      <div className='left'>
      <div className="about-cards grid grid-cols-3 mb-10 gap-10 flex-col md:flex-row ">
        {/* below cards  */}
        {belowcard.map((card, id) => (
        <div
          key={id}
          className="flex flex-col cursor-pointer bg-white justify-center py-3 px-1   hover:bg-orange-500 hover:text-white mt-10 rounded-tl-[20px] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] shadow-2xl "
        >
          <img src={card.img} alt="box_img" className="w-[50px] ml-6 text-orange-500 rounded rounded-tl-[23px] rounded-br-[23px]  rounded-tr-[23px] rounded-bl-[23px] " />
          <p className="text-[24px] font-bold uppercase mb-4 ">{card.title}</p>
          <p className="text-[20px] font-medium leading-2 w-full ">
            {card.description}
          </p>
        </div>
      ))}
        </div>
      </div>
      
     </div>
     <div className="mt-32 mx-auto rounded-md bg-[#FEBA4F] p-4 shadow-lg rounded rounded-tl-[23px] rounded-br-[23px]  rounded-tr-[23px] rounded-bl-[23px] h-[19rem]">
  <h2 className="text-5xl font-medium mt-8 sm:text-1xl md:text-3xl lg:text-3xl xl:text-5xl">Want to go Mainstream with us?</h2>
  <p className="text-gray-700 md:mt-10 sm:mt-2 ">Discover the latest trends, insights, and best practices in marketing and entrepreneurship. Or partner <br /> with us and become a part of our conversations.</p>
  <div className="md:mt-10 sm:mt-2">
    <button className="bg-orange-600 h-[50px] font-custom text-white hover:bg-orange-500 scale-105 hover:scale-110 duration-200 py-2 px-4 mr-4 rounded-lg">Contact us for PR →</button>
    <button className="bg-orange-600 h-[50px] font-custom hover:bg-orange-500 scale-105 hover:scale-110 duration-200  text-white py-2 px-4 rounded-lg">Visit the website here →</button>
  </div>

</div>
       </div>
    </>
   
  )
}

export default Cards