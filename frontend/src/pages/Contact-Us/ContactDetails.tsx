import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';

const ContactDetails: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 shadow-lg rounded-md border-b-4 border-b-blue-600">
      <div>
          <h3 className="text-3xl font-thin flex gap-2 items-center justify-end"><img src='/footer/logo.png' alt='footer logo' className='w-8 h-8'/><span className='text-gray-500'>The</span> Dev Shop</h3>
          <address className="not-italic mt-4 space-y-2">
            <p className="flex gap-3 items-center justify-start"><HiLocationMarker className='text-color3'/>100 Springwood Dr</p>
            <p className="flex gap-3 items-center justify-start"><HiLocationMarker className='text-color3'/>Pittsburgh, PA 15147</p>
            <p className="flex gap-3 items-center justify-start"><MdEmail className='text-color1'/>contact@thedevshop.com</p>
            <p className="flex gap-3 items-center justify-start"><BsFillTelephoneFill className='text-color4'/>412.219.4487</p>
            <p className="flex gap-3 items-center justify-start"><BsFillTelephoneFill className='text-color4'/>1.800.597.1620</p>
          </address>
        </div>
      </div>
      
      <div className="bg-white shadow-lg rounded-md border-b-4 border-b-blue-600">
        <h3 className="text-lg px-6 py-2 bg-blue-600 font-semibold text-white">Map</h3>
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
