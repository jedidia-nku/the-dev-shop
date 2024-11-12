import React from 'react';
import { motion } from 'framer-motion';
import { MdAirplanemodeActive } from "react-icons/md";

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-[80vh] bg-contain bg-center" style={{ backgroundImage: "url('/hero-images/bg-image.jpg')" }}>
      {/* Overlay */}
      <motion.div 
        className="absolute inset-0 bg-white opacity-80" 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1 }}
      ></motion.div>
      
      <motion.div
        className="relative z-10 flex flex-col items-center text-center p-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Text Content */}
        <h1 className="text-4xl md:text-4xl font-semibold text-red-500">
          WE BUILD <span className='text-color2'>SOFTWARE.</span>
        </h1>

        {/* Button */}
        <motion.a
          className="mt-6 px-6 flex gap-2 items-center py-3 bg-white text-blue-600 font-md text-md rounded-sm shadow-lg cursor-pointer"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <MdAirplanemodeActive /> LET'S GET STARTED!
        </motion.a>

        <p className="text-xl md:text-2xl text-blue-600 font-light mt-4">
          WHAT WILL YOU BUILD <span className='text-blue-600 font-semibold'>TODAY?</span>
        </p>
      </motion.div>
      
      {/* Smartphone Images */}
      <motion.div 
        className="relative flex bg-black my-12 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.img
          src="/hero-images/image-1.png"
          alt="App screen 1"
          className="h-80 bg-blue-500"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
        <motion.img
          src="/hero-images/image-2.png"
          alt="App screen 2"
          className="h-80 z-10"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        />
        <motion.img
          src="/hero-images/image-3.png"
          alt="App screen 3"
          className="h-80 bg-blue-500"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
