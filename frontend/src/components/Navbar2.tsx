import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MobileSidebar } from './MobileSidebar';
import './../../globals.css'

const Navbar2: React.FC = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<string>('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setActiveLink('Home');
        break;
      case '/services':
        setActiveLink('Services');
        break;
      case '/about':
        setActiveLink('About');
        break;
      case '/contact':
        setActiveLink('Contact');
        break;
      case '/careers':
        setActiveLink('Careers');
        break;
      default:
        setActiveLink('');
    }
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 bg-blue-600 z-50 text-white shadow-lg">
        <div className='flex items-center justify-between lg:justify-center'>
            <div className='w-full md:w-2/3'>
        <Link
            to="/"
            className= "flex gap-4 justify-center items-center">
            <img src="/footer/logo.png" alt="" className='h-12 w-12 p-1.5'/> <h1 className='md:text-2xl font-light'>The <span className='font-md'> DevShop</span></h1>
          </Link>
          </div>
          
      <div className="container">

        {/* Navigation Links */}
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } lg:flex space-x-4`}
        >
          <Link
            to="/"
            className={`${
              activeLink === 'Home'
                ? 'text-white text-xl py-2 px-4 border-b-4 border-white'
                : 'text-gray-100 text-xl py-2 px-4'
            } animated-link`}
            onClick={() => setActiveLink('Home')}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`${
              activeLink === 'Services'
                ? 'text-white text-xl py-2 px-4 border-b-4 border-white'
                : 'text-gray-100 text-xl py-2 px-4'
            } animated-link`}
            onClick={() => setActiveLink('Services')}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`${
              activeLink === 'About'
                ? 'text-white text-xl py-2 px-4 border-b-4 border-white'
                : 'text-gray-100 text-xl py-2 px-4'
            } animated-link`}
            onClick={() => setActiveLink('About')}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`${
              activeLink === 'Contact'
                ? 'text-white text-xl py-2 px-4 border-b-4 border-white'
                : 'text-gray-100 text-xl py-2 px-4'
            } animated-link`}
            onClick={() => setActiveLink('Contact')}
          >
            Contact Us
          </Link>
          <Link
            to="/careers"
            className={`${
              activeLink === 'Careers'
                ? 'text-white text-xl py-2 px-4 border-b-4 border-white'
                : 'text-gray-100 text-xl py-2 px-4'
            } animated-link`}
            onClick={() => setActiveLink('Careers')}
          >
            Careers
          </Link>
        </div>
      </div>
              {/* Mobile Menu Toggle */}
              <button
          className="text-white lg:hidden my-2 pr-4"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </nav>
  );
};

export default Navbar2;
