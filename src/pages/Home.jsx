import React from 'react'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import Courses from '../components/Courses'

const Home = () => {
  return (
    <div>
      <Banner />

      <div className='max-w-7xl mx-auto '>
      <Cards />
      {/* <Courses />  */}
      </div>
    </div>
  )
}

export default Home
