import React, { useEffect, useState } from 'react'
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import ProcessSection from "../components/ProcessSection"
import Testimonials from "../components/Testimonials"
import TopNav from "../components/TopNav"
import Navbar2 from '../components/Navbar2'
import '../../globals.css'

const Home:React.FC = () => {
  const [showNavbar2, setShowNavbar2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show Navbar2 when scrolled down 100px, hide when at top
      if (window.scrollY > 100) {
        setShowNavbar2(true);
      } else {
        setShowNavbar2(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <TopNav />
      {/* Navbar1 */}
      <div className={`transition-opacity duration-500 ${showNavbar2 ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar/>
      </div>

      {/* Navbar2 */}
      {showNavbar2 && (
          <div
          className={`fixed top-0 left-0 right-0 z-50 transform opacity-0 transition-all duration-500 ease-out ${
            showNavbar2 ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0'
          }`}
        >
          <Navbar2 />
        </div>
      )}

    <HeroSection />
    <Testimonials />
    <ProcessSection />
    <Footer />
    </div>
  )
}

export default Home
