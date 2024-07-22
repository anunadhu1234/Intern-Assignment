'use client';
import {React, useState} from 'react'

function FAQ() {
    const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };
  return (
    <div className="w-full absolute top-[5300px] mx-auto p-4">
      <h2 className="text-3xl m-[40px] font-bold mb-4 relative pb-2 ">FAQ</h2>
      <br className='w-[200px] h-[2px] bg-gray-100'/>
      <div className='grid grid-cols-2 gap-[20px] m-[0 20px]'>
        {[
          {
            question: 'What is the cost of a mobile application?',
            answer: 'Content',
          },
          {
            question: 'Do you provide a guarantee for the mobile application?',
            answer: 'Content',
          },
          {
            question: 'How long will development take?',
            answer: `Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.\n\nAverage development time from start to finished application:\n\n- Medium projects up to 3 months.\n- Large projects about 4-6 months.\n\nTo get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.`,
          },
          {
            question: 'I will not tell my idea, do you guarantee confidentiality?',
            answer: 'Content',
          },
        ].map((item, index) => (
          <div key={index} className="mb-4   border-gray-100  border-t-2 border-b-2">
            <button
              className="w-full text-left py-2 px-4  focus:outline-none"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center h-[70px] font-bold ">
                <span>{item.question}</span>
                <span className='rounded-full border-none shadow-lg w-[45px] h-[45px] pl-3 font-bold text-[30px] text-[green] items-center'>{open === index ? '-' : '+'}</span>
              </div>
            </button>
            {open === index && (
              <div className="mt-2 px-4 py-2  border-b-2 border-gray-200">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
