import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
           <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} alt="" className="w-full md:max-w-[480px]" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Oue Store</p>
          <p className='text-gray-500'>54622 Juhoo <br/> Near Marine Drive, Mumbai, India</p>
          <p className='text-gray-500'>Tel: (639) 675-4536 <br/> Email: dezire@forhelp.com</p>
          <p className='font-semibold text-xl text-gray-600'>Carrer at Dezire</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='cursor-pointer rounded-sm border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetter/>
  </div>
  )
}

export default Contact