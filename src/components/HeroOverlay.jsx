import React from 'react'

const HeroOverlay = ({ imageSrc, title, description, className = '' }) => {
  return (
    <section className={`relative text-center text-white px-4 ${className}`}>
      <img
        src={imageSrc}
        alt={`${title} background`}
        className='absolute top-0 left-0 w-full h-full object-cover opacity-70'
      />
      <div className='relative z-10 w-full max-w-3xl mx-auto'>
        <h1 className='text-3xl sm:text-5xl md:text-7xl font-bold'>{title}</h1>
        <p className='mt-6 sm:mt-10 text-base sm:text-xl md:text-2xl'>{description}</p>
      </div>
    </section>
  )
}

export default HeroOverlay
