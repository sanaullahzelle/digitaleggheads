import React from 'react'
import Seo from '../components/Seo'
import Courses from '../components/Courses'
import HeroOverlay from '../components/HeroOverlay'

const Services = () => {
  return (
    <>
      <Seo title="Digital Eggheads | Services" description="Explore Digital Eggheads services from SEO and PPC to creative campaigns and web development solutions." url="https://digitaleggheads.com/services" />
    <div className='relative'>
      <HeroOverlay
        className='py-20 sm:py-24 md:py-[9rem]'
        imageSrc='https://www.onlineathens.com/gcdn/authoring/2019/08/20/NABH/ghows-GA-9078f07d-a4a0-22e7-e053-0100007f4105-880a2a27.jpeg?width=1320&height=944&fit=crop&format=pjpg&auto=webp'
        title='Services We Offer'
        description='From SEO and paid media to creative and web development, we build connected services that drive predictable growth.'
      />

      <div className='max-w-7xl mx-auto px-4'>
        <Courses />
      </div>
    </div>
    </>
  )
}

export default Services
