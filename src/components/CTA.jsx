import React from 'react'
import { cta } from '../assets'

const CTA = () => {
  return (
    <div className='w-full bg-gray-100 border py-24'>
    <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 gap-8 max-w-[600px] items-center  px-4 md:px-0'>
                
        <img src={cta} className="w-[650px] mx-auto" />

        
        <div>
            <h1 className='py-2  text-3xl font-semibold'>Let’s plan your <span className='text-orange-500'>next growth milestone</span></h1>
            <p className='py-2 text-lg text-gray-600'>Book a discovery call and get a practical roadmap for your brand.</p>
            <button className='micro-btn max-[780px]:w-full my-4 px-8 py-5 rounded-md bg-blue-800 hover:bg-orange-500 hover:text-white-600 duration-500 transition-transform transform scale-100 hover:scale-110 border text-white font-bold'>Book a Strategy Call</button>

             
        </div>
        



    </div>
    

</div>
  )
}

export default CTA