import React from 'react';

const ContactDetails: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 shadow-lg rounded-md border-b-4 border-b-blue-600">
        <h3 className="text-lg font-semibold text-gray-800">The Dev Shop</h3>
        <p className="text-gray-600">100 Springwood Dr</p>
        <p className="text-gray-600">Pittsburgh, PA 15147</p>
        <p className="text-gray-600">contact@thedevshop.com</p>
        <p className="text-gray-600">+1 412-219-4987</p>
        <p className="text-gray-600">+1 800-597-1620</p>
      </div>
      
      <div className="bg-white p-6 shadow-lg rounded-md border-b-4 border-b-blue-600">
        <h3 className="text-lg font-semibold text-gray-800">Map</h3>
        <iframe
          title="location map"
          src="https://maps.google.com/maps?q=100%20Springwood%20Dr&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-48 rounded"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ContactDetails;
