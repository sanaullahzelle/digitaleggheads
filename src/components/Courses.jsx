import React from 'react'
// import Card from './Card'
// import Slider from "react-slick";
// import { courses } from '../data/Courses';

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

const Courses = () => {


  return (
   
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

    <div className="mt-16 text-center mx-auto rounded-md bg-[#FEBA4F] p-4 shadow-lg rounded rounded-tl-[23px] rounded-br-[23px]  rounded-tr-[23px] rounded-bl-[23px] h-[19rem]">
  <h2 className="text-5xl font-medium mt-8 sm:text-1xl md:text-3xl lg:text-3xl xl:text-5xl">Let’s Start Your Growth Journey</h2>
  <p className="text-gray-700 md:mt-10 sm:mt-2 ">Let us handle all your digital woes like pros with our foolproof strategies that will keep you on top of <br /> your game.</p>
  <div className="md:mt-10 sm:mt-2">
    <button className="bg-orange-600 h-[50px] font-custom text-white hover:bg-orange-500 scale-105 hover:scale-110 duration-200 py-2 px-4 mr-4 rounded-lg">Request a Proposal →</button>
    
  </div>

</div>
    </div>
   
  )
}

export default Courses