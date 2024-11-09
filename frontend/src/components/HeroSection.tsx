import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-[90%] bg-contain bg-center" style={{ backgroundImage: "url('/hero-images/bg-image.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-80"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center p-8">
        {/* Text Content */}
        <h1 className="text-4xl md:text-5xl font-bold text-red-600">WE BUILD SOFTWARE.</h1>

                {/* Button */}
        <a className="mt-6 px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-lg hover:bg-teal-600 transition-all">
          LET'S GET STARTED!
        </a>

        <p className="text-2xl md:text-3xl text-teal-500 mt-4">WHAT WILL YOU BUILD TODAY?</p>
        

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
