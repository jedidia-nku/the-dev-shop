import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white h-[100vh] p-8 shadow-lg rounded-md border-b-4 border-b-blue-600">
      
      <form className="space-y-4 mb-12">
        <div>
          <label className="block text-gray-600">First Name</label>
          <input type="text" placeholder="First Name" className="w-full border-b border-gray-400 rounded p-2 focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-gray-600">Last Name</label>
          <input type="text" placeholder="Last Name" className="w-full border-b border-gray-400 rounded p-2 focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-gray-600">Email Address</label>
          <input type="email" placeholder="Email" className="w-full border-b border-gray-400 rounded p-2 focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-gray-600">Phone Number</label>
          <input type="tel" placeholder="Phone" className="w-full border-b border-gray-400 rounded p-2 focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-gray-600">Message</label>
          <textarea placeholder="Message" className="w-full border-b border-gray-400 rounded p-2 h-24 focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <button type="submit" className="w-full text-blue-500 p-2 rounded">SUBMIT MESSAGE</button>
      </form>
    </div>
  );
};

export default ContactForm;
