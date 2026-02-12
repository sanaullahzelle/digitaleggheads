import React from 'react'
import Seo from '../components/Seo'
import Scard from '../components/Scard'
import HeroOverlay from '../components/HeroOverlay'

const Blogs = () => {
  return (
    <>
      <Seo title="Digital Eggheads | Blogs" description="Read the latest Digital Eggheads insights, growth stories, and updates from our marketing journey." url="https://digitaleggheads.com/blogs" />
    <div>
      <HeroOverlay
        className='py-20 sm:py-24 md:py-[7rem] bg-gradient-to-r from-[#00003f] via-orange-900 to-[#00003f]'
        imageSrc='https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80'
        title='Blogs'
        description='Insights, playbooks, and behind-the-scenes lessons from campaigns, content, and performance marketing.'
      />

      <div className='max-w-7xl mx-auto px-4'>
        <Scard />
      </div>
    </div>
    </>
  )
}

export default Blogs
