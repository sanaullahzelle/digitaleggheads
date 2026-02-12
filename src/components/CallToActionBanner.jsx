import React from 'react'

const CallToActionBanner = ({ title, description, primaryLabel, secondaryLabel }) => {
  return (
    <section className='mt-12 sm:mt-16 text-center mx-auto rounded-md bg-[#FEBA4F] p-4 sm:p-6 shadow-lg rounded-tl-[23px] rounded-br-[23px] rounded-tr-[23px] rounded-bl-[23px] min-h-[19rem]'>
      <h2 className='text-2xl sm:text-3xl md:text-5xl font-medium mt-4 sm:mt-8'>{title}</h2>
      <p className='text-gray-700 mt-4 sm:mt-10'>{description}</p>
      <div className='mt-6 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3'>
        {primaryLabel && (
          <button className='micro-btn bg-orange-600 h-[50px] font-custom text-white hover:bg-orange-500 scale-105 hover:scale-110 duration-200 py-2 px-4 rounded-lg'>
            {primaryLabel}
          </button>
        )}
        {secondaryLabel && (
          <button className='micro-btn bg-orange-600 h-[50px] font-custom hover:bg-orange-500 scale-105 hover:scale-110 duration-200 text-white py-2 px-4 rounded-lg'>
            {secondaryLabel}
          </button>
        )}
      </div>
    </section>
  )
}

export default CallToActionBanner
