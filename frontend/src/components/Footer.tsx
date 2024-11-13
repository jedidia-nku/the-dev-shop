import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { TbClockHour4 } from "react-icons/tb";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { motion } from 'framer-motion';


const Footer: React.FC = () => {
  return (
    <footer className="bg-footerColor">
      <div className='text-white py-5 px-12 lg:px-24'>

      <div className="container lg:mx-auto lg:px-4 grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* Sitemap Section */}
        <div>
          <p className="text-3xl font-thin">Sitemap</p>
          <ul className="grid grid-cols-3 mt-4 gap-2">
            <li className='flex gap-3 items-center'><IoMdHome className='text-color1'/> Home</li>
            <li className='flex gap-3 items-center'><MdEmail className='text-color1'/> Services</li>
            <li className='flex gap-3 items-center'><FaRegHeart className='text-color1'/>About Us</li>
            <li className='flex gap-3 items-center'><MdEmail className='text-color1'/>Contact Us</li>
            <li className='flex gap-3 items-center'><MdEmail className='text-color1'/>Careers</li>
          </ul>
                {/* Social Media Section */}
          <div>
          <p className="text-3xl mt-8 mb-3 font-thin">Social Media</p>
          
      <div className=" flex space-x-6 ml-3">
      <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                 className='p-4 bg-footerColor1 rounded-full  hover:bg-blue-800'><FaFacebookF className="text-2xl" />
      </motion.div>
      <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                 className='p-4 bg-footerColor1 rounded-full  hover:bg-blue-400'><FaTwitter className="text-2xl" />
                 </motion.div>
      <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                 className='p-4 bg-footerColor1 rounded-full  hover:bg-blue-500'><FaLinkedinIn className="text-2xl" />
                 </motion.div>
      </div>
      </div>
        </div>

        {/* Latest Articles Section */}
        <div className='flex flex-col items-start lg:items-center'>
          <h3 className="text-3xl font-thin">Latest Articles</h3>
          <ul className="flex flex-col  gap-6 mt-4 space-y-4">
            <li className='flex gap-4'>
            <img src='/footer/aerasfog.jpg' className='w-12 h-12 rounded-full border-2 border-footerColor1'/>
            <div className='flex flex-col gap-2'>
              <p>Aeras Fog | Bringing Back Sports</p>
              <p className='text-sm text-gray-300 flex gap-2 items-center'><TbClockHour4 className='text-color1'/>July 19, 2021</p>
              </div>
              </li>
            <li className='flex gap-4'>
            <img src='/footer/angular.png' className='w-12 h-12 rounded-full border-2 border-footerColor1'/>
            <div className='flex flex-col gap-2'>
              <p>Angular with Bazel | ngPittsburgh at Philips</p>
              <p className='text-sm text-gray-300 flex gap-2 items-center'><TbClockHour4 className='text-color1'/>July 19, 2021</p>
              </div>
              </li>
            <li className='flex gap-4'>
            <img src='/footer/meterfeeder.png' className='w-12 h-12 rounded-full border-2 border-footerColor1'/>
            <div className='flex flex-col gap-2'>
              <p>Daniel Lopretto from Meter Feeder</p>
              <p className='text-sm text-gray-300 flex gap-2 items-center'><TbClockHour4 className='text-color1'/>July 19, 2021</p>
              </div>
              </li>
            <li className='flex gap-4'>
            <img src='/footer/synerg-logo-icon.png' className='w-12 h-12 rounded-full border-2 border-footerColor1'/>
            <div className='flex flex-col gap-2'>
              <p>The Dev Shop collaboration with ADP</p>
              <p className='text-sm text-gray-300 flex gap-2 items-center'><TbClockHour4 className='text-color1'/>July 19, 2021</p>
              </div>
              </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div>
          <h3 className="text-2xl font-thin flex gap-2 items-center justify-center md:justify-end"><img src='/footer/logo.png' alt='footer logo' className='w-8 h-8'/>The Dev Shop</h3>
          <address className="not-italic mt-4 space-y-2 flex flex-col items-center md:items-end">
            <p className="flex gap-3 items-center justify-end"><HiLocationMarker className='text-color3'/>100 Springwood Dr</p>
            <p className="flex gap-3 items-center justify-end"><HiLocationMarker className='text-color3'/>Pittsburgh, PA 15147</p>
            <p className="flex gap-3 items-center justify-end"><MdEmail className='text-color1'/>contact@thedevshop.com</p>
            <p className="flex gap-3 items-center justify-end"><BsFillTelephoneFill className='text-color4'/>412.219.4487</p>
            <p className="flex gap-3 items-center justify-end"><BsFillTelephoneFill className='text-color4'/>1.800.597.1620</p>
          </address>
        </div>
      </div>

      </div>
      {/* Copyright Section */}
      <div className="text-center bg-footerColor1 text-white py-4">
        <p>Copyright © The Dev Shop 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
