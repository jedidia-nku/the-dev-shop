import React from 'react';
import { MdAirplanemodeActive } from "react-icons/md";

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-[80vh] bg-contain bg-center" style={{ backgroundImage: "url('/hero-images/bg-image.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-80"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center p-8">
        {/* Text Content */}
        <h1 className="text-4xl md:text-4xl font-semibold text-red-500">WE BUILD <span className='text-color2'>SOFTWARE.</span></h1>

                {/* Button */}
        <a className="mt-6 px-6 flex gap-2 items-center py-3 bg-white text-blue-600 font-md text-md rounded-sm shadow-lg">
          <MdAirplanemodeActive /> LET'S GET STARTED!
        </a>

        <p className="text-xl md:text-2xl text-blue-600 font-light mt-4">WHAT WILL YOU BUILD <span className='text-blue-600 font-semibold'>TODAY?</span></p>
        

      </div>
      
      {/* Smartphone Images */}
      <div className="relative flex bg-black my-12">
        <img src="/hero-images/image-1.png" alt="App screen 1" className="h-80 bg-blue-500" />
        <img src="/hero-images/image-2.png" alt="App screen 2" className="h-80 z-10" />
        <img src="/hero-images/image-3.png" alt="App screen 3" className="h-80 bg-blue-500" />
      </div>
    </div>
  );
};

export default HeroSection;
