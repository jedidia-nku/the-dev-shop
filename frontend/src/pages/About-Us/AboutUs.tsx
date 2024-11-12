import React, { useState } from 'react';
import TopNav from '../../components/TopNav';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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

    // Toggle accordion items
    const toggleAccordion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <>
    <TopNav />
    <Navbar />
    <section className="relative bg-cover bg-center h-[60vh] text-white" style={{ backgroundImage: "url('/hero-images/bg-image.jpg')" }}>
    {/* Overlay */}
    <div className="absolute inset-0 bg-gray-800 bg-opacity-80"></div>
      
      {/* Content */}
      <div className="relative flex flex-col items-center -bottom-28 justify-center h-full px-4 text-center">
        <div className="text-center mx-auto">
          <img src="/footer/logo.png" alt="Logo" className="items-center p-2 rounded-full w-20 h-20  bg-white mb-4 mx-auto" />
          </div>
          <h1 className="text-4xl font-sm my-2">The Dev Shop</h1>
          <p className="text-lg font-sm mt-2">
            WE <span className='text-yellow-600 '>DESIGN, BUILD, AND DEPLOY</span> SOFTWARE PRODUCTS AND SOLUTIONS.
          </p>
        
      
      {/* About Section */}
      <div className="relative bg-white text-gray-800 mt-12 p-6 rounded-sm  shadow-b-lg border border-gray-400 max-w-[80%] mx-auto text-left">
        <h2 className="text-4xl font-light text-color1 mb-4">About Us</h2>
        <div className="text-gray-500 space-y-4 flex gap-3">
          <p className="first-letter:text-4xl first-letter:font-md first-letter:text-blue-500">
            Whether you are looking to launch a new product, roll out updates, or need help in maintaining 
            existing products, you can rely on us as a partner to create extraordinary experiences for your 
            business and ideas.
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
    <section className="max-w-6xl mx-auto mt-40 p-8 text-gray-700">
    {/* Title Sections */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Our Team Section */}
      <div>
        <h2 className="text-3xl font-sm text-color1 mb-6">Our Team</h2>
        <p className="first-letter:text-4xl first-letter:font-bold first-letter:text-blue-500 text-gray-500">
          Our team consists of top-talent software engineers delivering services to clients in the US. We provide our clients a dedicated team that is an extension of your business. Our engineers collaborate and develop a deep understanding of our client’s needs. We believe long-term relationships are based on trust and high performance. We work side by side with clients to build tailored business solutions, analyze risk, and to enhance business opportunities.
        </p>
        <p className="mt-4 text-gray-500">
          Our team provides clients with innovative business solutions that are beneficial to our clients:
        </p>
        <ul className="list-disc text-gray-500 ml-6 mt-2">
          <li>Predictive Budgets - minimizing additional hiring costs</li>
          <li>Flexibility of Scope</li>
          <li>Project Management and consistent communication</li>
          <li>Project Cohesion and stability</li>
        </ul>
      </div>
      
      {/* Our Approach Section */}
      <div>
        <h2 className="text-3xl font-sm text-color1 mb-6">Our Approach</h2>
        
        {/* Accordion Items */}
        <div className="space-y-2">
          {["Discovery", "Architecture", "Development", "Release"].map((item, index) => (
            <div key={index} className="border border-gray-300 rounded-sm">
              <button
                className="flex items-center justify-between w-full px-4 py-2 text-left font-semibold text-white bg-blue-600 rounded-sm focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center">
                  <span className="mr-2">💡</span>
                  {item}
                </div>
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-gray-100 text-gray-700">
                  <p>
                    {/* Placeholder text, replace with actual descriptions */}
                    Detailed information about the {item} process and its impact on achieving project goals.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  <section className="max-w-6xl mx-auto p-8 text-center text-gray-700">
      {/* Title */}
      <h2 className="text-5xl font-light text-blue-600">Team</h2>
      <p className="mt-2 text-2xl font-light text-gray-500">
        We work collaboratively with you from concept to code to turn innovative ideas into reality.
      </p>
      
      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white px-4 py-8 border-b-4 border flex flex-col items-start gap-2 my-auto border-b-orange-400 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-3xl font-light text-orange-400">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            {member.linkedIn && (
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7  rounded-full">
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
