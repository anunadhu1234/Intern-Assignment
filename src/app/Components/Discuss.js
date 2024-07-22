import React from 'react'

function Discuss() {
  return (
    <div className="absolute top-[3095px] flex items-center justify-center w-full min-h-screen">
      <div className="w-full p-4 mx-auto bg-gradient-to-r from-yellow-400 to-green-600">
        <div className="flex items-center justify-between h-full px-8 py-16  ">
          <div className="text-left">
            <h1 className="text-4xl font-bold text-gray-900">Let&#39;s discuss Your project</h1>
            <p className="mt-4 text-lg text-gray-700">
              Let&#39;s figure out how to create an effective application, its cost and terms of its development
            </p>
          </div>
          <div className="p-8 bg-white rounded-lg shadow-md w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700">Full name</label>
          <input
            type="text"
            value="My Name"
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone number</label>
          <div className="mt-1 flex items-center">
            <span className="mr-2">🇮🇳 +91</span>
            <input
              type="text"
              value="0000000000"
              readOnly
              className="block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Business name</label>
          <input
            type="text"
            value="ABC Technologies PVT LTD"
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">Business mail</label>
          <input
            type="email"
            value="demoaccount@gmail.com"
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
      </div>
      <div className="mt-6 mr-2">
        <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600">
          Discuss the project
        </button>
      </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Discuss
