import Image from 'next/image';
import React from 'react'
import dashboard from './images/dd.png'
import plan from './images/plan.png'
import design from "./images/illustration_3939992.png"
import dev from "./images/coding.png"
import test from "./images/checklist.png"
import launch from "./images/rocket.png"
import support from "./images/service-provider.png"

function Application() {
    return (
        <div className="absolute w-full top-[3800px] flex flex-col items-center">
          <h1 className="text-3xl font-bold my-8">Application Development Stages</h1>
          <div className="absolute z-10 mt-0">
            <Image src={dashboard}  alt="Dashboard" className="w-[600px] h-[950px]" />
          </div>
          <div className="relative grid grid-cols-2 w-full ml-[400px] justify-around gap-[48px]">
            <Stage
              number='1'
              title="Analysis"
              description="We craft precise technical specs, aligning with your business, technology, and user requirements."
              src={plan}
            />
            <Stage
              number='2'
              title="Design"
              description="We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces."
              src={design}
            />
            <Stage
            number='3'
              title="Development"
              description="We create an extensible architecture, write clean and stable code. We integrate with customer technologies."
              src={dev}
            />
            <Stage
            number='4'
              title="Testing"
              description="We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions."
              src={test}
            />
            <Stage
            number='5'
              title="Launching"
              description="We design the application page and publish it in the App Store and Google Play stores."
              src={launch}
            />
            <Stage
            number='6'
              title="Support"
              description="We monitor the stability of the application, update it for new devices and versions of iOS and Android."
              src={support}
            />
          </div>
          
        </div>
      );
    };
    
    const Stage = ({src, number,title, description }) => (
        <div className="relative bg-white p-6 shadow-lg rounded-lg w-80 h-48 flex items-center">
        <div className="absolute inset-0 flex justify-end opacity-10 pr-4">
          <span className="text-[170px] font-bold text-gray-900">{number}</span>
        </div>
        <div className="relative z-10 flex items-start">
          <Image src={src} alt="" className="w-8 h-8 mr-4" />
          <div>
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-2 text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    );

export default Application
