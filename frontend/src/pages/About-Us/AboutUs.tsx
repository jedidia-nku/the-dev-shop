import React, { useEffect, useState } from 'react';
import TopNav from '../../components/TopNav';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaChevronDown } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa6";
import Navbar2 from '../../components/Navbar2';

interface TeamMember {
  name: string;
  role: string;
  linkedIn?: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Thomas Alteri', role: 'Tech Lead' },
  { name: 'Adam Bertram', role: 'Tech Lead' },
  { name: 'Greg Sluka', role: 'Dev Ops' },
  { name: 'Steve Baleno', role: 'CEO', linkedIn: 'https://linkedin.com/in/stevebaleno' },
  { name: 'Shane Rings', role: 'Project Manager' },
  { name: 'Chris Pentrack', role: 'Controller' },
  { name: 'Jamie Baleno', role: 'Manager' },
  { name: 'Joseph Price', role: 'VP of Product Management' },
  { name: 'Matt Baleno', role: 'Software Developer' },
  { name: 'Kimberly Palaza', role: 'Marketing / QA' },
  { name: 'Kathy Stultz', role: 'Director of Customer Success' },
  { name: 'David Cerniglia', role: 'Software Developer' },
  { name: 'Eddie Rivera', role: 'Robotics / VR / IOT / Mobile' },
  { name: 'Lindsay Leigh', role: 'Software Developer' },
  { name: 'Shawn Wilson', role: 'Software Developer' },
];

const AboutUs: React.FC = () => {
    // State for the accordion
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [showNavbar2, setShowNavbar2] = useState(false);

    // Toggle accordion items
    const toggleAccordion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };

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
      <section className="relative bg-cover bg-center h-[32vh] lg:h-[60vh] text-white animate-fadeIn" style={{ backgroundImage: "url('/hero-images/bg-image.jpg')" }}> 
    {/* Overlay */}
    <div className="absolute inset-0 bg-gray-800 bg-opacity-80"></div>
    
    {/* Content */}
    <div className="relative flex flex-col items-center -bottom-32 justify-center h-full px-4 text-center animate-slideIn">
      <div className="text-center p-2 rounded-full w-20 h-20 bg-white">
        <img src="/footer/logo.png" alt="Logo" className="items-center p-2 mb-4 mx-auto animate-zoomIn" />
      </div>
      <h1 className="text-4xl font-sm my-2">The Dev Shop</h1>
      <p className="text-lg font-sm mt-2">
        WE <span className="text-yellow-600">DESIGN, BUILD, AND DEPLOY</span> SOFTWARE PRODUCTS AND SOLUTIONS.
      </p>

      {/* About Section */}
      <div className="relative bg-white text-gray-800 mt-12 px-6 py-4 lg:py-12 rounded-sm shadow-b-lg border border-b-gray-400 max-w-[85%] mx-auto text-left animate-fadeIn">
        <h2 className="text-xl lg:text-4xl font-light text-color1 mb-4">About Us</h2>
        <div className="text-gray-500 grid grid-col-1 text-xs lg:text-md lg:grid-cols-2 gap-2 animate-slideIn">
          <p>
          <div className='flex items-center align-center'>
            <h1 className="first-letter:text-4xl first-letter:font-sm first-letter:text-blue-500 first-letter:leading-[0.8] first-letter:mr-2 text-gray-500">W</h1> 
            <p className='m-0'>
            <span>hether you are looking to launch a new product, roll out updates, or need help in maintaining existing products, you can rely on us as a</span> 
            </p>
            </div>
            partner to create extraordinary experiences for your business and ideas.
            </p>
          <p>
            The Dev Shop provides end-to-end product development, quality assurance, product and solution 
            engineering services to assist customers in achieving their product development and business goals. 
            Our experience and knowledge across various verticals help customers create exceptional products and 
            get them to market on time and within budget.
          </p>
        </div>
      </div>
    </div>
      </section>

      <section className="max-w-6xl mx-auto mt-52 p-8 text-gray-700 animate-fadeIn">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Our Team Section */}
          <div>
            <h2 className="text-3xl font-sm text-color1 mb-6 animate-slideIn">Our Team</h2>
            <p >
            <div className='flex align-center'>
            <h1 className="first-letter:text-6xl first-letter:font-sm first-letter:text-blue-500 first-letter:leading-[0.8] first-letter:mr-2 text-gray-500">O</h1> 
            <p className='m-0'>
            <span>ur team consists of top-talent software engineers delivering services to</span> 
            <span>clients in the US. We provide our clients a dedicated</span> 
            </p>
            </div>
            team that is an extension of your business. Our engineers collaborate and develop a deep understanding of our client's needs. We believe long-term relationships are based on trust and high performance. We work side by side with clients to build tailored business solutions, analyze risk, and enhance business opportunities.  
            
            </p>
            <ul className="list-disc text-gray-500 ml-6 mt-2 animate-slideIn">
              <li>Predictive Budgets - minimizing additional hiring costs</li>
              <li>Flexibility of Scope</li>
              <li>Project Management and consistent communication</li>
              <li>Project Cohesion and stability</li>
            </ul>
          </div>
          
          {/* Our Approach Section */}
          <div>
            <h2 className="text-3xl font-sm text-color1 mb-6 animate-fadeIn">Our Approach</h2>
            <div className="space-y-2 animate-slideIn">
              {["Discovery", "Architecture", "Development", "Release"].map((item, index) => (
                <div key={index} className="border border-gray-300 rounded-sm">
                  <button
                    className="flex items-center justify-between w-full px-4 py-2 text-left font-semibold text-white bg-blue-600 rounded-sm focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex items-center">
                      <span className="mr-2"><FaRegLightbulb /></span>
                      {item}
                    </div>
                    <span>{openIndex === index ? <FaChevronDown /> : <FaChevronDown /> }</span>
                  </button>
                  {openIndex === index && (
                    <div className="p-4 bg-gray-100 text-gray-700">
                      <p>Detailed information about the {item} process and its impact on achieving project goals.</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-8 text-center text-gray-700 animate-fadeIn">
        <h2 className="text-5xl font-light text-color1">Team</h2>
        <p className="mt-2 text-2xl font-light text-gray-500">
          We work collaboratively with you from concept to code to turn innovative ideas into reality.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 animate-fadeIn">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white px-4 py-8 border-b-4 border flex flex-col items-start gap-2 my-auto border-b-orange-400 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-bounceOnHover">
              <h3 className="text-3xl font-light text-orange-400">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              {member.linkedIn && (
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-blue-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 rounded-full">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5 11.25h-3v-5.6c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.96v5.7h-3v-10h2.88v1.4h.04c.4-.75 1.37-1.54 2.83-1.54 3.02 0 3.58 1.99 3.58 4.57v5.57z"/>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

    <Footer />
  </>
  );
};

export default AboutUs;
