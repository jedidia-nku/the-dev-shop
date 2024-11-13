import React, { useEffect, useState } from 'react';
import JobPosting from './JobPosting';
import ContactForm from './ContactForm';
import TopNav from '../../components/TopNav';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Navbar2 from '../../components/Navbar2';

const CareersSection: React.FC = () => {
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

    <section className="relative bg-cover bg-center h-[28vh] lg:h-[50vh] text-white animate-fadeIn" style={{ backgroundImage: "url('/hero-images/bg-image.jpg')" }}>
    {/* Overlay */}
    <div className="absolute inset-0 bg-gray-800 bg-opacity-80 animate-fadeIn"/>
          {/* Content */}
          <div className="relative flex flex-col items-center pt-8 lg:pt-20 h-full px-4 text-center animate-slideIn">
          <h1 className="text-5xl font-sm my-2 animate-bounceOnHover">Careers</h1>
          <p className="text-lg font-md mt-2 animate-zoomIn">
            WE DESIGN, BUILD, AND DEPLOYSOFTWARE PRODUCTS AND SOLUTIONS.
          </p>
      </div>

      <div className="relative max-w-3xl lg:max-w-6xl mx-auto my-auto px-4 lg:flex lg:space-x-8">
        <div className="relative lg:w-2/3 space-y-8 -top-20 shadow-lg rounded-md lg:border lg:border-gray-300 lg:border-b-4 lg:border-b-blue-600 pb-6 animate-fadeIn">
          
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

        <div className="relative lg:w-2/5 -top-20 animate-slideIn">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </section>
    </>
  );
};

export default CareersSection;
