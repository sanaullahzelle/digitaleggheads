import React from 'react'
import CallToActionBanner from './CallToActionBanner'

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

const Courses = () => {
  return (
    <div className='bg-white-500 shadow-sm shadow-md text-center text-black'>
      <h1 className='text-3xl sm:text-4xl md:text-5xl loading-snug px-4 sm:px-10 mt-12 sm:mt-24 text-orange-400 font-serif'>
        A Fuse of Creativity, Imagination & <br className='hidden sm:block' /> <span className='inline-block custom-margin'>Technical Expertise</span>
      </h1>
      <div className='text-center text-black'>
        <h3 className='mt-6 sm:mt-8 text-xl sm:text-2xl lg:text-3xl text-gray-400 font-base'>We deliver excellence at every stage of growth.</h3>
        <p className='text-sm sm:text-base mt-6 sm:mt-10 text-gray-500'>As a results-driven digital marketing agency, we help you scale with <br className='hidden md:block' /> full-funnel services that strengthen your digital presence and pipeline.</p>
      </div>
      <section className="container mx-auto flex flex-col justify-between gap-2 pb-10 sm:pb-[6rem] px-4">
        <div className="w-full">
          <div className="about-cards grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {cardList.map((card, id) => (
              <div
                key={id}
                className="interactive-card flex flex-col cursor-pointer bg-white justify-center py-6 px-8 sm:px-10 mt-8 sm:mt-16 rounded-tl-[35px] rounded-br-[35px] rounded-tr-[35px] rounded-bl-[35px] shadow-2xl min-h-[240px]"
              >
                <img src={card.img} alt="box_img" className="w-[75px] mb-4 text-orange-500" />
                <p className="text-xl sm:text-2xl font-bold uppercase mb-4">{card.title}</p>
                <p className="text-sm sm:text-[15px] font-medium leading-2 w-full">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToActionBanner
        title='Let’s Plan Your Growth Strategy'
        description={
          <>
            Work with our team to create a focused growth roadmap designed to keep your brand ahead of{' '}
            <br className='hidden md:block' /> your game.
          </>
        }
        primaryLabel='Request a Proposal →'
      />
    </div>
  )
}

export default Courses
