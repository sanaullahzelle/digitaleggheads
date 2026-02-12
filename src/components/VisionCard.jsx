import React from 'react'
import { FaCalendar } from 'react-icons/fa'

const VisionCard = ({ title = 'Vision', description, bgClass }) => {
  return (
    <article className={`p-4 rounded-lg shadow-md flex-1 ${bgClass}`}>
      <div className='py-6 sm:py-10'>
        <i className='text-4xl text-white fas fa-star'>
          <FaCalendar />
        </i>
        <h3 className='text-lg font-semibold mt-4 text-white md:text-3xl'>{title}</h3>
        <p className='text-white mt-2'>{description}</p>
      </div>
    </article>
  )
}

export default VisionCard
