import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-md">
      <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-600">First Name</label>
          <input type="text" placeholder="First Name" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-gray-600">Last Name</label>
          <input type="text" placeholder="Last Name" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-gray-600">Email Address</label>
          <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-gray-600">Phone Number</label>
          <input type="tel" placeholder="Phone" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label className="block text-gray-600">Message</label>
          <textarea placeholder="Message" className="w-full border border-gray-300 rounded p-2 h-24 focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">Submit Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
