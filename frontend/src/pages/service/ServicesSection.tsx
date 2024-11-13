import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import TopNav from '../../components/TopNav';
import { FaDollarSign } from "react-icons/fa6";
import { CgScreen } from "react-icons/cg";
import { LuBookOpen } from "react-icons/lu";
import { ImMobile2 } from "react-icons/im";
import { FaEye } from "react-icons/fa";
import { FaCloud } from "react-icons/fa";
import { SiRocket } from 'react-icons/si';
import Footer from '../../components/Footer';
import Navbar2 from '../../components/Navbar2';


const ServicesSection: React.FC = () => {
  const [showNavbar2, setShowNavbar2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show Navbar2 on large screens when scrolled down 100px, otherwise hide
      if (window.innerWidth >= 1024 && window.scrollY > 100) {
        setShowNavbar2(true);
      } else if (window.innerWidth >= 1024) {
        setShowNavbar2(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Clean up the event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      <TopNav />

      {/* Navbar1 - Visible only on large screens, hidden on scroll */}
      <div className={`block transition-opacity duration-500 ${showNavbar2 ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
      </div>

      {/* Navbar2 - Always visible on medium and small screens; on large screens only when scrolled */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-500 ease-out 
          ${showNavbar2 || window.innerWidth < 1024 ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0'} 
          ${window.innerWidth >= 1024 ? 'lg:block' : 'block'}`}
      >
        <Navbar2 />
      </div>
    <section  className='relative shadow-lg flex mb-4 h-[145vh] md:h-[70vh] lg:h-[120vh] bg-cover bg-center animate-fadeIn' 
    style={{ backgroundImage: "url('/service-image/bg-service.jpg')"}}>
      <div className="absolute inset-0 bg-footerColor opacity-90"></div>
      <div className="absolute text-white">
      <div className="lg:mx-12 px-4 text-center animate-slideIn">
        <h2 className="text-4xl font-sm text-cyan-400 mt-12 mb-8">Services</h2>
        <p className="mt-2 text-gray-300 text-2xl font-light">Stop in at the shop.</p>
        <p className="mt-2 text-gray-300 text-2xl font-light">See how we can help you with your next project.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
        <div className="flex items-start space-x-4 lg:p-6 animate-zoomIn">
      <div className="flex items-center justify-center bg-transparent border-2 border-white p-2 rounded">
        <FaDollarSign className="w-8 h-8 text-white" />
      </div>
      <div className='flex flex-col justify-start items-start'>
        <h3 className="text-lg font-semibold text-cyan-400">Ecommerce</h3>
        <p className="text-gray-300 mt-2 text-start">Our proven Ecommerce platform has been used across various industries with millions of dollars in transactions. This translates to a well established understanding of digital sales.</p>
      </div>
        </div>
        <div className="flex items-start space-x-4 lg:p-6 animate-zoomIn">
          <div className="flex items-center justify-center bg-transparent border-2 border-white p-2 rounded">
            <CgScreen className="w-8 h-8 text-white" />
          </div>
          <div className='flex flex-col justify-start items-start'>
            <h3 className="text-lg font-semibold text-cyan-400">Point of Sale</h3>
            <p className="text-gray-300 mt-2 text-start">Our proven Ecommerce platform has been used across various industries with millions of dollars in transactions. This translates to a well established understanding of digital sales.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 lg:p-6 animate-zoomIn">
          <div className="flex items-center justify-center bg-transparent border-2 border-white p-2 rounded">
            <LuBookOpen className="w-8 h-8 text-white" />
          </div>
          <div className='flex flex-col justify-start items-start'>
            <h3 className="text-lg font-semibold text-cyan-400">Product Management</h3>
            <p className="text-gray-300 mt-2 text-start">We help you to ask the right questions and thoroughly define your product or solution, saving you money and giving you a greater chance of success.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 lg:p-6 animate-zoomIn">
          <div className="flex items-center justify-center bg-transparent border-2 border-white p-2 rounded">
            <ImMobile2 className="w-8 h-8 text-white" />
          </div>
          <div className='flex flex-col justify-start items-start'>
            <h3 className="text-lg font-semibold text-cyan-400">Mobile Development</h3>
            <p className="text-gray-300 mt-2 text-start">Reaching your customer means having a presence on major mobile operating systems. Let us extend your reach.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 lg:p-6 animate-zoomIn">
          <div className="flex items-center justify-center bg-transparent border-2 border-white p-2 rounded">
            <FaEye className="w-8 h-8 text-white" />
          </div>
          <div className='flex flex-col justify-start items-start'>
            <h3 className="text-lg font-semibold text-cyan-400">VR / AR Development</h3>
            <p className="text-gray-300 mt-2 text-start">Featuring team members with experience across multiple VR platforms and an international presence - we look forward to transforming your customer s technology experience.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4 lg:p-6 animate-zoomIn">
          <div className="flex items-center justify-center bg-transparent border-2 border-white p-2 rounded">
            <FaCloud className="w-8 h-8 text-white" />
          </div>
          <div className='flex flex-col justify-start items-start'>
            <h3 className="text-lg font-semibold text-cyan-400">Web Design and SEO</h3>
            <p className="text-gray-300 mt-2 text-start">With experts in Google Analytics and strong backgrounds in marketing research, we are well suited to help you launch your online presence.</p>
          </div>
        </div>
        </div>

      </div>
      <div className='absolute w-full flex justify-center mt-6'>
      <button className="px-6 flex gap-3 py-2 items-center bg-cyan-500 text-white rounded-sm font-md hover:bg-cyan-400 hover:animate-bounceOnHover">
         <SiRocket className='' style={{ transform: "rotate(47deg)" }}/> I HAVE A PROJECT
        </button>
        </div>
      </div>
      </section>
    <Footer />
    </>
  );
};

export default ServicesSection;
