import React from 'react';
import JobPosting from './JobPosting';
import ContactForm from './ContactForm';
import TopNav from '../../components/TopNav';
import Navbar from '../../components/Navbar';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { TbClockHour4 } from "react-icons/tb";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";

const CareersSection: React.FC = () => {
  return (
    <>
    <TopNav />
    <Navbar />
    <section className="relative bg-cover bg-center h-[50vh] text-white" style={{ backgroundImage: "url('/hero-images/bg-image.jpg')" }}>
    {/* Overlay */}
    <div className="absolute inset-0 bg-gray-800 bg-opacity-80"></div>
          {/* Content */}
          <div className="relative flex flex-col items-center pt-20 h-full px-4 text-center">
          <h1 className="text-5xl font-sm my-2">Careers</h1>
          <p className="text-lg font-md mt-2">
            WE DESIGN, BUILD, AND DEPLOYSOFTWARE PRODUCTS AND SOLUTIONS.
          </p>
      </div>

      <div className="relative max-w-6xl mx-auto my-auto px-4 md:flex md:space-x-8">
        <div className="relative md:w-2/3 space-y-8 -top-20 shadow-lg rounded-md border border-gray-300 border-b-4 border-b-blue-600 pb-6">
          
          {/* Sample Job Postings */}
          <JobPosting
            title="Senior Software Engineer"
            location="Pittsburgh, PA"
            type="Full-time"
            qualifications={[
              "Bachelor’s degree in Computer Science or related field",
              "5+ years of software engineering experience",
              "Proficiency in TypeScript, React, Node.js, SQL",
            ]}
            responsibilities={[
              "Design, develop, and maintain software applications",
              "Collaborate with cross-functional teams",
              "Mentor junior developers",
            ]}
          />
          <JobPosting
            title="Software Engineer"
            location="Remote"
            type="Full-time"
            qualifications={[
              "Bachelor’s degree in Computer Science or related field",
              "3+ years of software engineering experience",
              "Proficiency in JavaScript, React, Node.js",
            ]}
            responsibilities={[
              "Develop and maintain web applications",
              "Work with design and product teams",
              "Participate in code reviews",
            ]}
          />
        </div>

        <div className="relative md:w-2/5 -top-20">
          <ContactForm />
        </div>
      </div>
    
    <footer className="bg-footerColor">
      <div className='text-white py-5 lg:px-24'>

      <div className="container lg:mx-auto lg:px-4 grid grid-cols-1 md:grid-cols-3 gap-16">
        
        {/* Sitemap Section */}
        <div>
          <p className="text-lg lg:text-3xl font-thin">Sitemap</p>
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
        <div className='p-4 bg-footerColor1 rounded-full  hover:text-blue-500'><FaFacebookF className="text-2xl" /></div>
        <div className='p-4 bg-footerColor1 rounded-full  hover:text-blue-400'><FaTwitter className="text-2xl" /></div>
        <div className='p-4 bg-footerColor1 rounded-full  hover:text-blue-600'><FaLinkedinIn className="text-2xl" /></div>
      </div>
      </div>
        </div>

        {/* Latest Articles Section */}
        <div className='flex flex-col items-center'>
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
          <h3 className="text-3xl font-thin flex gap-2 items-center justify-end"><img src='/footer/logo.png' alt='footer logo' className='w-8 h-8'/>The Dev Shop</h3>
          <address className="not-italic mt-4 space-y-2">
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
    </section>
    </>
  );
};

export default CareersSection;
