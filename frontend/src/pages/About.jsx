import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil, magni nemo repellat ex illum nisi quis sit optio officiis aut provident iste unde distinctio minus fugit ipsam impedit qui ut. </p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eveniet quaerat eius praesentium error asperiores, nostrum possimus facere molestiae, quas perferendis accusantium omnis libero illo repellendus vero, officia aliquid aut?</p>
            <b className="text-gray-800">Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur architecto earum odit quam maxime obcaecati nihil vel impedit veniam ipsa voluptates labore repellendus, perferendis, autem recusandae. A placeat hic debitis.</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5 ">
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit omnis, sapiente officiis exercitationem obcaecati itaque vel ad odit voluptatem numquam, ipsum dolor nostrum tempore consequuntur cupiditate reiciendis deserunt nihil asperiores.</p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5 ">
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit omnis, sapiente officiis exercitationem obcaecati itaque vel ad odit voluptatem numquam, ipsum dolor nostrum tempore consequuntur cupiditate reiciendis deserunt nihil asperiores.</p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5 ">
          <b>Exceptional Customer Service::</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit omnis, sapiente officiis exercitationem obcaecati itaque vel ad odit voluptatem numquam, ipsum dolor nostrum tempore consequuntur cupiditate reiciendis deserunt nihil asperiores.</p>
        </div>
      </div>
      <NewsLetter/>
    </div>
  )
}

export default About