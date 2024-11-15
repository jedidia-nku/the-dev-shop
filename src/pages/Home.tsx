import React, { useEffect, useState } from 'react';
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProcessSection from "../components/ProcessSection";
import Testimonials from "../components/Testimonials";
import TopNav from "../components/TopNav";
import Navbar2 from '../components/Navbar2';
import '../../globals.css';

const Home: React.FC = () => {
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
    <div>
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

      <HeroSection />
      <Testimonials />
      <ProcessSection />
      <Footer />
    </div>
  );
}

export default Home;
