import React from 'react';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';
import Navbar from '../../components/Navbar';
import TopNav from '../../components/TopNav';
import Footer from '../../components/Footer';

const ContactSection: React.FC = () => {
  return (
    <>
    <TopNav />
    <Navbar />
    <section className="relative bg-cover bg-center h-[28vh] lg:h-[50vh] text-white animate-fadeIn"
        style={{ backgroundImage: "url('/hero-images/bg-image.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-800 bg-opacity-80"></div>
        {/* Content */}
        <div className="relative flex flex-col items-center pt-8 lg:pt-20 h-full px-4 text-center animate-slideIn">
          <h1 className="text-5xl font-light animate-zoomIn">Contact Us</h1>
          <p className="text-2xl font-md mt-2">HOW CAN WE HELP?</p>
        </div>

        <div className="relative max-w-3xl lg:max-w-6xl mx-auto my-auto px-4 lg:flex lg:space-x-8">
        <div className="relative lg:w-2/3 space-y-8 -top-20 shadow-lg rounded-md lg:border lg:border-gray-300 lg:border-b-4 lg:border-b-blue-600 pb-6 animate-fadeIn">
            <ContactForm />
          </div>
          <div className="relative lg:w-2/5 -top-20 animate-slideIn">
            <ContactDetails />
          </div>
        </div>
        <Footer />
    </section>
    </>
  );
};

export default ContactSection;
