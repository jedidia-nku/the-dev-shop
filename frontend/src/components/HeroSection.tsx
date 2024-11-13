import React from 'react';
import { motion } from 'framer-motion';
import { MdAirplanemodeActive } from "react-icons/md";

const HeroSection: React.FC = () => {
  return (
    <div className="relative flex flex-col px-4 lg:flex-row items-center justify-evenly h-auto bg-contain bg-center" 
    style={{ backgroundImage: "url('/hero-images/bg-image.jpg')" }}>
      {/* Overlay */}
      <motion.div 
        className="absolute inset-0 bg-white opacity-90" 
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
        className="relative flex my-12 items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {/* Left Image */}
        <motion.div
          className="relative "
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <img
            src="/hero-images/image-2.png"
            alt="App screen 1"
            className="h-full shadow-lg"
          />
        </motion.div>

        {/* Center Image */}
        <motion.div
          className="relative z-10  -ml-16"  // Add a negative margin to center it above others
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <img
            src="/hero-images/image-3.png"
            alt="App screen 3"
            className="h-full shadow-lg"
          />
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative -ml-16 "
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <img
            src="/hero-images/image-1.png"
            alt="App screen 2"
            className="h-full shadow-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
