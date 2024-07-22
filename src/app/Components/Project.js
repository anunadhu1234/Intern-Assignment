
"use client";
import Image from 'next/image';
import {React, useState} from 'react'
import image from './images/image.png'
import play from './images/google-play-badge.png'
import app from './images/app.png'


function Project() {
  const [activeTab, setActiveTab] = useState('Project 1');

  const renderContent = () => {
    switch (activeTab) {
      case 'Project 1':
        return (
          <div className="flex flex-row items-start p-0 w-[1224px] h-[449px] gap-[24px]">
            <div className="flex flex-col items-start p-0 gap-[42px]">
              <div className="w-[155px] h-[52px] font-inter font-bold text-[36px] leading-[144%] tracking-[0.326451px] text-[#101828]">
                Project 1
              </div>
              <div className="w-[600px]  h-[60px] font-sfpro text-[15px] font-normal leading-[20px] tracking-[-0.24px] text-[#101828]">
                Crafted an innovative rental property management app, seamlessly integrating secure login, absence registration, and a tenant notice board. Elevating the resident experience with user-friendly design and efficient communication channels
              </div>
              <div className="w-[496px] h-[22px] font-sfpro text-[17px] font-normal leading-[22px] tracking-[-0.408px] text-[#475467]">
                Business analysis <span className='text-[#fde047]'>/</span> iOS <span className='text-[#fde047]'>/</span> Android <span className='text-[#fde047]'>/</span> QA <span className='text-[#fde047]'>/</span> UI/UX Design
              </div>
              <div className="flex flex-row items-center p-0 gap-[50px] w-[400px] h-[24px]">
                <div><span role="img" aria-label="location">📍</span> India</div>
                <div><span role="img" aria-label="category">🏢</span> Real Estate</div>
              </div>
              <div className='flex flex-row gap-[12px]'>
              <div className="flex flex-col items-start p-0 gap-[8px] w-[176px] h-[59px]">
                <div className='text-[24px] font-bold'>400%</div>
                <div>User Growth</div>
              </div>
              <div className="flex flex-col items-start p-0 gap-[8px] w-[128px] h-[59px]">
                <div className='text-[24px] font-bold'>+ 200 000</div>
                <div>Active Users</div>
              </div>
              </div>
              <div className="flex flex-row items-start  p-0 gap-[16px] w-[300px] h-[40px]">
                <Image src={app} alt="App Store" width={150} height={40} />
                <Image src={play} alt="Google Play" width={150} height={40} />
              </div>
            </div>
            <Image className='w-[750px] h-[600px] flex-none order-1 self-stretch flex-grow-0' src={image} alt="image"/>
          </div>
        );
      case 'Project 2':
        return <div>Content for Project 2</div>;
      case 'Project 3':
        return <div>Content for Project 3</div>;
      case 'Project 4':
        return <div>Content for Project 4</div>;
      default:
        return null;
    }
  };

  return (
<div className='absolute w-full h-[1000px] top-[2250px] bg-gray-100'>
    <div className="relative left-[108px] top-[100px]   flex flex-col items-start p-0 gap-[40px] w-[1224px] h-[717px]">
      <div className="w-[600px] h-[52px] font-inter font-bold text-[36px] leading-[144%] tracking-[0.326451px] text-[#101828]">
        Projects we are proud of
      </div>
      <div className="w-[600px] h-[50px] font-sfpro text-[15px]  font-medium leading-[20px] tracking-[-0.24px] text-[#101828]">
        Our software development company is truly proud of the wonderful clients we have worked with. We enjoy a long-term partnership
      </div>
      <div className="flex flex-row  items-start p-0 w-[406px] h-[58px] gap-[40px]">
        {['Project 1', 'Project 2', 'Project 3', 'Project 4'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-[75px]  h-[20px] font-inter  text-[15px] leading-[144%] tracking-[0.326451px] ${
              activeTab === tab ? 'text-[#101828] font-bold underline decoration-yellow-300 decoration-2' : ''
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="w-[1224px] h-[449px]">
        {renderContent()}
      </div>
    </div>
    </div>
  )
}

export default Project
