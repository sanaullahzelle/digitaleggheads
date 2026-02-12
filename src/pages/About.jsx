import React from 'react'
import Seo from '../components/Seo'
import CallToActionBanner from '../components/CallToActionBanner'
import HeroOverlay from '../components/HeroOverlay'
import VisionCard from '../components/VisionCard'

const visionDescription =
  'To serve as a committed and credible leadership partner for our clients to unlock their growth potential by directly impacting the bottom line with our results-oriented approach that generates an accelerated impact. And at the same time, to create a growth culture that fosters learning, focuses on upskilling, encourages ideation, and sparks initiatives to nurture curiosity, ignite enthusiasm, and fuel creativity among our team members.'

const About = () => {
  return (
    <>
      <Seo title="Digital Eggheads | About" description="Learn about Digital Eggheads, our mission, team culture, and how we drive meaningful growth for global clients." url="https://digitaleggheads.com/about" />
    <div className='relative'>
      <HeroOverlay
        className='py-24 sm:py-28 md:py-[15rem]'
        imageSrc='https://thumbs.dreamstime.com/z/four-happy-friends-laughing-sitting-couch-living-room-four-happy-friends-laughing-sitting-couch-112145130.jpg'
        title='About Us'
        description='We’re Digital Eggheads — strategists, creatives, and growth specialists focused on helping brands move from visibility to measurable impact.'
      />

      <div className='max-w-7xl mx-auto px-4'>
        <div className='w-full bg-white mt-10 sm:mt-16 md:mt-20'>
          <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px] md:px-0 gap-6'>
            <div className='flex flex-col justify-center'>
              <h1 className='text-3xl sm:text-4xl md:text-5xl loading-snug text-orange-400 font-serif'>
                We blend strategy with creativity<br /> <span className='inline-block custom-margin'>to build brands people remember</span>
              </h1>
            </div>
            <p className='md:ml-10 text-sm sm:text-base'>
              From a two-person startup to a performance-focused agency serving clients worldwide, our journey has always centered on one thing: meaningful growth. We combine curiosity, creative thinking, and analytical rigor to help organizations of every size build stronger digital foundations and scale with confidence.
            </p>
          </div>

          <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 p-3 mt-10 sm:mt-16 md:mt-20'>
            <VisionCard title='Vision' description={visionDescription} bgClass='bg-orange-500' />
            <VisionCard title='Vision' description={visionDescription} bgClass='bg-blue-900' />
          </div>

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
    </div>
    </>
  )
}

export default About
