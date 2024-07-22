'use client';
import {React,useState} from 'react'

function Discuss() {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    businessName: '',
    businessEmail: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    contactNumber: '',
    businessName: '',
    businessEmail: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let valid = true;
    let newErrors = { name: '', contactNumber: '', businessName: '', businessEmail: '' };

    if (!formData.name) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    if (!formData.contactNumber) {
      newErrors.contactNumber = 'Contact number is required';
      valid = false;
    } else if (!/^\d+$/.test(formData.contactNumber)) {
      newErrors.contactNumber = 'Contact number must be numeric';
      valid = false;
    }
    if (!formData.businessName) {
      newErrors.businessName = 'Business name is required';
      valid = false;
    }
    if (!formData.businessEmail) {
      newErrors.businessEmail = 'Business email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Business email address is invalid';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log('Form submitted successfully:', formData);
    }
  };
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
          <form onSubmit={handleSubmit} className="p-8 bg-white rounded-lg shadow-md w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div onSubmit={handleSubmit}>
          <label className="block text-gray-700">Full name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="My Name"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-gray-700">Phone number</label>
          <div className="mt-1 flex items-center">
            <span className="mr-2">🇮🇳 +91</span>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="0000000000"
              className="block w-full border border-gray-300 rounded-md p-2"
            />
            {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
          </div>
        </div>
        <div>
          <label className="block text-gray-700">Business name</label>
          <input
             type="text"
             name="businessName"
             value={formData.businessName}
             onChange={handleChange}
            placeholder="ABC Technologies PVT LTD"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
          {errors.businessName && <p className="text-red-500 text-sm">{errors.businessName}</p>}
        </div>
        <div>
          <label className="block text-gray-700">Business mail</label>
          <input
            type="text"
            name="businessEmail"
            value={formData.businessEmail}
            onChange={handleChange}
            placeholder="demoaccount@gmail.com"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
          {errors.businessEmail && <p className="text-red-500 text-sm">{errors.businessEmail}</p>}
        </div>
      </div>
      <div className="mt-6 mr-2">
        <button type="submit" className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600">
          Discuss the project
        </button>
      </div>
    </form>
        </div>
      </div>
    </div>
  )
}

export default Discuss
