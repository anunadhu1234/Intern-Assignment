import React from 'react'
import Navbar from './Navbar'
import categories from './images/categories.png'
import bills from './images/bills.png'
import dashboard from './images/dashboard.png'
import vacate from './images/vacate.png'
import Image from 'next/image'

function Main() {
  return (
    <div className="absolute w-full z-10 h-[800px] main bg-[#f2f4f7]">
        <Navbar/>
      <main className="relative bg-[#f2f4f7]">
        <section className="absolute left-[108px] top-[80px] flex flex-col gap-5 w-[600px]">
          <h1 className="text-[#FFBA00] font-bold text-[39px] leading-[47px] tracking-[0.33px]">
            User-Centric Excellence:<span className='text-[#101828]'> Our App Development services Tackles Your Pain Points</span>
          </h1>
          <p className="text-[#101828] font-normal text-[18px] leading-[21px] tracking-[-0.24px]">
            Experience a Seamless Digital Journey with Desun - Where Every Line of Code Resolves Your Challenges and Elevates Your App Experience to Unparalleled Heights.
          </p>
        </section>
        <div className="absolute left-[628px] top-[-504px] rotate-[-12deg] w-[292.23px] h-[632.77px]  rounded-[24px]">
          <Image src={vacate} alt="..."/>
        </div>
        <div className="absolute left-[952.52px] top-[-572.98px] rotate-[-12deg] w-[292.23px] h-[632.77px]  rounded-[24px]">
        <Image src={categories} alt="..."/>
        </div>
        <div className="absolute left-[1151.95px] top-[50.29px] rotate-[-12deg] w-[292.23px] h-[632.77px]  rounded-[24px]">
        <Image src={dashboard} alt="..."/>
        </div>
       

        <section className="absolute left-[7%] mt-[32%] transform -translate-y-1/2  p-8  rounded-lg bg-white shadow-lg">
          <h2 className="text-xl text-[black] font-bold">Leave your contacts and we will call you back <br /> within 30 minutes</h2>
          <form className="mt-4 space-y-4">
          <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="My Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone number</label>
                <div className="mt-1 flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">+91</span>
                  <input type="text" className="flex-1 min-w-0 block w-full rounded-none rounded-r-md border-gray-300 shadow-sm" placeholder="0000000000" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Business name</label>
                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="ABC Technologies PVT LTD" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Business mail</label>
                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" placeholder="demoaccount@gmail.com" />
              </div>
            
            <button type="submit" className="w-[50%] py-2 px-4 bg-[#80A948] text-white font-bold rounded-md">Get <br /> consultation</button>
            </div>
          </form>
        </section>
      </main>
    </div>
  )
}

export default Main
