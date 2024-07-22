import React from 'react'

function Projects() {
    const industries = [
        { name: 'Social media', icon: '📞' },
        { name: 'Fitness and sport', icon: '🏀' },
        { name: 'Bank', icon: '🏦' },
        { name: 'Construction', icon: '🏗️' },
        { name: 'Game projects', icon: '🎮' },
        { name: 'Education', icon: '🎓' },
        { name: 'Auto, transport', icon: '🚗' },
        { name: 'Medicine, health', icon: '❤️' },
        { name: 'Restaurants, food delivery', icon: '🍽️' },
        { name: 'Marketplaces', icon: '🛍️' },
        { name: 'AR technology', icon: '🎯' },
        { name: 'TV series', icon: '📺' },
        { name: 'Startups', icon: '💼' },
        { name: 'Religion', icon: '✝️' },
        { name: 'Online courses', icon: '💻' },
      ];
    
      return (
        <div className="absolute  top-[1600px] items-center justify-center h-full w-full  bg-[#f2f4f7]">
          <div className='ml-[100px] mt-[75px]'>
            <h1 className="text-[50px] font-bold mb-6">
              Developed more than <span className="text-green-500">100</span> <br /> projects in <span className="text-green-500">15</span> industries
            </h1>
            </div>
            <div className=" ml-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-100 rounded-lg">
                  <span className="text-2xl mr-3 h-[40px] w-[40px] p-1 bg-[white] shadow-lg rounded-full">{industry.icon}</span>
                  <span className="text-lg font-medium">{industry.name}</span>
                </div>
              ))}
            </div>
        </div>
  )
}

export default Projects
