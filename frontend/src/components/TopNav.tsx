import React, { useState } from 'react';
import { IoShareSocial } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const TopNav:React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section>
      <div className="flex justify-between pt-5 px-32">
        <div className='w-[28%]'>
        <img src="./logo.png" alt="" />
        </div>
        <div 
        className="relative flex mt-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <IoShareSocial className='text-4xl text-blue-700 font-bold cursor-pointer hover:bg-blue-700 transition-colors font-bold cursor-pointer btn-circle btn-circle-primary animated zoomInDown animation-delay-7 transition-colors hover:text-white p-2 duration-500'/>
      <div 
        className={`absolute right-24 flex gap-6 transform transition-transform duration-1000 ${
          isHovered ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <FaFacebook className="text-blue-600 text-xl cursor-pointer" />
        <FaTwitter className="text-blue-400 text-xl cursor-pointer" />
        <FaLinkedin className="text-blue-700 text-xl cursor-pointer" />
      </div>
        </div>
      </div>
    </section>
  )
}

export default TopNav
