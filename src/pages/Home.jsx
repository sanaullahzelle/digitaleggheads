import React from 'react'
import Seo from '../components/Seo'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import Courses from '../components/Courses'

const Home = () => {
  return (
    <>
      <Seo title="Digital Eggheads | Home" description="Digital Eggheads helps brands unlock growth with creative, data-driven digital marketing and development services." url="https://digitaleggheads.com/" />
    <div>
      <Banner />

      <div className='max-w-7xl mx-auto '>
      <Cards />
      {/* <Courses />  */}
      </div>
    </div>
    </>
  )
}

export default Home
