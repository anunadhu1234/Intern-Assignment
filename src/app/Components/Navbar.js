import React from 'react'
import logo from './images/logo.png'
import Image from 'next/image'
import cell from './images/cell-phone-svgrepo-com (2).png'
import mail from './images/mail-svgrepo-com.png'
function Navbar() {
  return (
    <nav className=" relative z-10 flex flex-row items-center p-4 gap-20 w-[1222px] h-[92px] left-1/2 transform -translate-x-1/2 top-6 bg-white shadow-md rounded-xl">
    <div>
      <Image src={logo} href='/'  alt="Logo" className="w-[174px] h-[60px] flex-none order-0 flex-grow-0 cursor-pointer" />
    </div>
    <ul className="flex flex-row items-start p-0 gap-6 w-[503px] h-[18px] flex-grow">
        <li className="text-[#101828] font-medium text-sm leading-[18px] cursor-pointer">Services</li>
        <li className="text-[#101828] font-medium text-sm leading-[18px] cursor-pointer">Media</li>
        <li className="text-[#101828] font-medium text-sm leading-[18px] cursor-pointer">Cases</li>
        <li className="text-[#101828] font-medium text-sm leading-[18px] cursor-pointer">FAQ</li>
        <li className="text-[#101828] font-medium text-sm leading-[18px] cursor-pointer">Contacts</li>
      </ul>
    <div className="flex-shrink-0 flex items-center space-x-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
            <Image src={cell} alt='cell'/>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-medium text-sm leading-[18px] text-[#80A948]">+91</span>
            <span className="font-medium text-sm leading-[18px] text-[#80A948]">0000000000</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
          <Image src={mail} alt='mail'/>
          </div>
          <span className="font-medium text-sm leading-[18px] text-[#80A948]">demo@gmail.com</span>
        </div>
      </div>
  </nav>
  )
}

export default Navbar
