import Image from 'next/image'
import React from 'react'
import team from'./images/team.png'

function Team() {
  return (
    <div className="absolute top-[4700px] h-[550px] flex flex-wrap w-full justify-center items-center p-8 bg-gray-100 gap-6">
      <div className="max-w-xl ">
        <h2 className="text-3xl font-bold mb-4 p-2">Our team</h2>
        <p className="text-gray-700 mb-6 p-2">
          Thousand is a full-cycle digital production company with its own product analytics, design, web and mobile development.
        </p>
        <div className="flex space-x-8 mb-6 p-2">
          <div className='p-2'>
            <p className="text-5xl font-bold p-2">28</p>
            <p className="text-gray-500">team members</p>
          </div>
          <div className='p-2'>
            <p className="text-5xl font-bold p-2">+100</p>
            <p className="text-gray-500">projects</p>
          </div>
          <div className='p-2'>
            <p className="text-5xl font-bold p-2">7 years</p>
            <p className="text-gray-500">in IT sphere</p>
          </div>
        </div>
        <p className="text-gray-700">
          All the necessary specialists - from a designer to a tester - are on our staff. We hire the best specialists in the market. It&#39;s expensive but worth it.
        </p>
      </div>
      <div className="max-w-lg">
        <Image src={team}  alt="Team" className="rounded-lg shadow-lg h-[400px] w-[900px]" />
      </div>
    </div>
  )
}

export default Team
