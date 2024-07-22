import Image from 'next/image'
import React from 'react'
import logo2 from './images/logo2.png'

function Footer() {
  return (
    <div className="bg-black top-[6000px] flex flex-col items-center w-[90%] h-[450px] ml-[5%] rounded-lg absolute text-white py-0">
        <div className=" mb-4 mt-0 items-center">
          <Image src={logo2} alt="Company Logo" className="h-[280px] w-[350px] mr-4" />
          
        </div>
      <div className=" mx-auto flex flex-col md:flex-row justify-between w-full items-center px-4">
        
        <div className="flex flex-col md:flex-row justify-between w-full flex-grow text-center md:text-left">
          <div className="mb-4 md:mb-0 md:mr-8 cursor-pointer">
            <p className="text-sm font-bold">📞 Contact nums</p>
            <p>+91 0000000000</p>
          </div>
          <div className="mb-4 md:mb-0 md:mr-8 cursor-pointer">
            <p className="text-sm font-bold">✉️ Gmail</p>
            <p>demo@gmail.com</p>
          </div>
          <div className="mb-4 md:mb-0 md:mr-8 cursor-pointer">
            <p className="text-sm font-bold">📍 Address</p>
            <p>Mumbai, India</p>
          </div>
          <div className="mb-4 md:mb-0 md:mr-8 cursor-pointer">
            <p className="text-sm font-bold">📩 Leave a request</p>
            <p>Leave a request</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-sm">We work throughout the world</p>
      </div>
    </div>
  )
}

export default Footer
