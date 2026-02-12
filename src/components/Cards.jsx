import React from 'react'
import CallToActionBanner from './CallToActionBanner'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import CardOne from '../data/CardOne'

const cardList = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/6610/6610971.png",
    title: "Marketing",
    description:
      "Get noticed by your audience across all digital platforms.",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0071/6203/6269/files/Artboard_1_300x300.png?v=1614302541",
    title: "Creative",
    description:
      "Make an impact with creative design & stirring campaigns.",
  },
  {
    img: "https://www.gigamon.com/content/dam/website-assets/icons/home-threats.png.imgo.png",
    title: "Search",
    description:
      "Cut through the clutter with professional SEO, SEM, and PPC.",
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
      "Travel",
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
         <h1 className='text-3xl sm:text-4xl md:text-5xl loading-snug px-4 sm:px-10 mt-12 sm:mt-24 text-orange-400 font-serif'>A Fuse of Creativity, Imagination & <br className='hidden sm:block' /> <span className='inline-block custom-margin'>Technical Expertise</span></h1>
         <div className='text-center text-black '>
        <h3 className='mt-8 text-2xl  lg:text-3xl text-gray-400 font-base'>We deliver excellence at every stage of growth.</h3>
        <p className='text-1xl mt-10 text-gray-500'>As a results-driven digital marketing agency, we help you scale with <br /> full-funnel services that strengthen your digital presence and pipeline.</p>
       </div>
       <section className=" container mx-auto flex flex-col justify-between gap-2 pb-[6rem]">
      <div className="w-full  ">
        {/* about cards */}
        <div className="about-cards flex gap-10 flex-col md:flex-row">
        {cardList.map((card, id) => (
        <div
          key={id}
          className="interactive-card flex flex-col cursor-pointer bg-white justify-center py-6 px-10 mt-24 rounded-tl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-bl-[35px] shadow-2xl md:min-h-[300px] w-full card-item-div max-w-screen-md min-h-[260px]"
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
         <h1 className='text-3xl sm:text-4xl md:text-5xl loading-snug px-4 sm:px-10 mt-12 sm:mt-24 text-orange-400 font-serif'>From Idea to Action, we've Driven <br className='hidden sm:block' /> <span className='inline-block custom-margin'>Immense Growth for our Clients</span></h1>
         <div className='text-center text-black '>
        <h3 className='mt-8 text-2xl  lg:text-3xl text-gray-400 font-base'>Proof in Performance</h3>
        <p className='text-1xl mt-10 text-gray-500'>We partner closely with every client to turn strategy into measurable business outcomes.</p>
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
     <button className='micro-btn border h-[53px] border-black w-[14.5rem] mt-8 rounded-tl-[15px] transform scale-100 hover:scale-110 duration-200 rounded-br-[10px] rounded-tr-[15px] rounded-bl-[15px] hover:shadow-2xl'>Explore our case studies →</button>

     <div className='container flex flex-col lg:flex-row bg-gray-100 gap-6 sm:gap-10 border mt-16 sm:mt-[120px] lg:mt-[200px] duration-200 rounded-tl-[15px] rounded-br-[10px] rounded-tr-[15px] rounded-bl-[15px] shadow-2xl p-4 sm:p-6'>
      <div className='right'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl loading-snug mt-6 lg:mt-40 text-orange-400 font-serif'>Industries We’ve Helped Scale</h1>
      <p className='text-base sm:text-lg mt-4 sm:mt-8 text-gray-500 lg:ml-[100px]'>Our cross-industry experience helps brands adapt faster, compete smarter, and grow sustainably.</p>
      </div>
      <div className='left'>
      <div className="about-cards grid grid-cols-2 md:grid-cols-3 mb-4 sm:mb-10 gap-4 sm:gap-10">
        {/* below cards  */}
        {belowcard.map((card, id) => (
        <div
          key={id}
          className="interactive-card flex flex-col cursor-pointer bg-white justify-center py-3 px-1 hover:bg-orange-500 hover:text-white mt-10 rounded-tl-[20px] rounded-br-[20px] rounded-tr-[20px] rounded-bl-[20px] shadow-2xl"
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
     <div className='mt-12 sm:mt-32'>
      <CallToActionBanner
        title='Ready to Grow with Digital Eggheads?'
        description={
          <>
            Partner with our team to shape your next growth chapter through strategy, creative, and performance execution.
            <br className='hidden md:block' /> Let’s build momentum together.
          </>
        }
        primaryLabel='Talk to Our Team →'
        secondaryLabel='View Our Work →'
      />
     </div>
       </div>
    </>
   
  )
}

export default Cards